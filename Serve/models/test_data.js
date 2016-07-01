var mongoose = require('mongoose');
var _ = require('lodash');

mongoose.model('Device').find({
    device_id: 1
}, function(err, devices) {
    if (err) throw err;
    if (!devices.length) {
        insertTestData();
    }
});

function insertTestData() {

    //插入四个测试设备
    var device1 = {
        device_id: 1,
        name: "教室的传感器",
        profile: "测量教室的温度",
        sensors: [{
            sensor_id: 11,
            name: "wendu",
            sensor_type: "温度传感器"
        }]
    };
    var device2 = {
        device_id: 2,
        name: "宿舍的传感器",
        profile: "测量宿舍的温度",
        sensors: {
            sensor_id: 21,
            name: "wendu",
            sensor_type: "温度传感器"
        }
    };
    var device3 = {
        device_id: 3,
        name: "仓库的传感器",
        profile: "测量仓库的温度",
        sensors: {
            sensor_id: 31,
            name: "wendu",
            sensor_type: "温度传感器"
        }
    };
    var device4 = {
        device_id: 4,
        name: "车间的传感器",
        profile: "测量车间的温度",
        sensors: {
            sensor_id: 41,
            name: "wendu",
            sensor_type: "温度传感器"
        }
    };
    mongoose.model('Device').create([device1, device2, device3, device4]);

    // 插入四个传感器的历史数据，传感器数值随机生成，历史日期为2016-7-1前10天
    var sensorIDs = [11, 21, 31, 41];
    _.each(sensorIDs, function(id) {
        var timestamp = 1467302400 * 1000; // 2016/7/1 0:0:0 0ms
        var count = 24 * 10; //10天的数据
        for (var i = 0; i < count; i++) {
            mongoose.model('SensorValue').create({
                sensor_id: id,
                value: _.random(-10, 42.2),
                timestamp: timestamp
            }, function(err, sensors) {
                if (err) {
                    return false;
                }
            });
            timestamp = timestamp - 3600 * 1000; //一小时一个数据点
        }
    });

}
