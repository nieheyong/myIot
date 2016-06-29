var mongoose = require('mongoose');
var config   = require('../config');

mongoose.connect(config.mongodb, {
    server: {poolSize: 20}
}, function (err) {
    if (err) {
       console.log('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }else {
        console.log('connect to mongodb success');
        require('./test_data');
    }
});

// models
require('./device');
require('./sensor_value');

exports.Device         = mongoose.model('Device');
exports.SensorValue    = mongoose.model('SensorValue');
