var express           = require('express');
var deviceController  = require('./controller/device');
var sensorValueController  = require('./controller/sensor_value');
var config            = require('./config');
var router            = express.Router();

// 传感器
router.get('/devices', deviceController.get);
router.post('/devices',  deviceController.creat);

router.get('/sensor/:sensor_id/value/history', sensorValueController.getHistory);
router.get('/sensor/:sensor_id/value/realtime', sensorValueController.realTime);
router.post('/sensor/:sensor_id/value',  sensorValueController.post);


module.exports = router;
