var SensorValue = require('../models').SensorValue;
var redisClient = require('../redis').redisClient;
var _ = require('lodash');


exports.get = function(req, res, next) {

};


exports.getHistory = function(req, res, next) {
  var sensor_id = req.params.sensor_id;
  var start = req.query.start || 0;
  var end = req.query.end || 0;

  SensorValue.find({
      sensor_id: sensor_id
    })
    //.limit(336)
    .select('value timestamp')
    .where('timestamp').gte(start).lte(end)
    .sort('timestamp')
    .exec(function(err, sensorValues) {
      if (err) {
        return false;
      }
      res.json(sensorValues);
    });

};

var forever = 4100688000000; //2099-12-12

exports.post = function(req, res, next) {
  var sensor_id = Number(req.params.sensor_id);
  var value = req.body.value;


  var timestamp = new Date().getTime();

  redisClient.zadd(sensor_id, timestamp, (timestamp * 10000) + value, function(err, response) {
    if (err) throw err;
    console.log('added ' + response + ' items.');
  });

  redisClient.zremrangebyscore(sensor_id, 0, timestamp - tenMin, function(err, response) {
    if (err) throw err;
    console.log('removeAll ' + response + ' items.');
  });

  if (req.body.save) {
    SensorValue.create({
      sensor_id: sensor_id,
      value: value
    }, function(err, sensors) {
      if (err) {
        return false;
      }
      res.json(sensors);
    });
  } else {
    res.send({
      success: true
    });
  }
};


var tenMin =  60*10 * 1000;
exports.realTime = function(req, res, next) {
  var sensor_id = Number(req.params.sensor_id);//获取传感器ID
  var latsTimestamp = Number(req.query.latsTimestamp) || 0;//上次获取数据的时间戳
  var timestamp = new Date().getTime();//当前时间戳
  //移除十分钟之前的数据
  redisClient.zremrangebyscore(sensor_id, 0, timestamp - tenMin, function(err, response) {
    if (err) throw err;
    console.log('removeAll ' + response + ' items.');
    //获取最新的数据
    redisClient.zrangebyscore(sensor_id, latsTimestamp + 1, forever, function(err, response) {
      if (err) throw err;

      var timestamp = parseInt(_.last(response) / 10000);
      _.each(response, function(data, index) {
        response[index] = response[index] % 10000;
      });
      res.json({
        data: response,
        latsTimestamp: timestamp
      });
    });
  });

};
