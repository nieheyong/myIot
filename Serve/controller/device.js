var Device=require('../models').Device;

exports.get = function (req, res, next) {
  Device.find(function(err,devices){
    if (err) throw err;
    res.json(devices);
  });
};

exports.creat = function (req, res, next) {
  Device.create(req.body.device,function(err,sensors){
    if (err) throw err;
    res.json(sensors);
  });
};
