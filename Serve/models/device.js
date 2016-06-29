var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var SensorSchema = new Schema({
    sensor_id: { type: Number },
    name: { type: String,default:'temperature sensor'},
    sensor_type: { type: String }
});

var DeviceSchema = new Schema({
    device_id:{type:Number,index:true,unique:true},
    name:{type:String},
    profile:{type: String,default:''},
    create_at: { type: Number, default: new Date().getTime() },
    sensors:[SensorSchema]
});

mongoose.model('Device', DeviceSchema);
