var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var SensorValueSchema = new Schema({
    sensor_id: { type: Number },
    value: { type: Number},
    timestamp:{type: Number, default: new Date().getTime()}
});

mongoose.model('SensorValue', SensorValueSchema);