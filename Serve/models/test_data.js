var mongoose = require('mongoose');
var _=require('lodash');

//var device1={
//    device_id:0XD39942,
//    name:"教室的传感器",
//    profile:"",
//    sensors:[{sensor_id:0XD3994200,name:"wendu",sensor_type:"温度传感器"},{sensor_id:0XD3994201,name:"",sensor_type:"湿度传感器"}]
//};
//var device2={
//    device_id:2,
//    name:"宿舍的传感器",
//    profile:"",
//    sensors:{sensor_id:2,name:"wendu",sensor_type:"wendu"}
//};
//var device3={
//    device_id:4,
//    name:"仓库的传感器",
//    profile:"测量仓库的温度",
//    sensors:{sensor_id:2,name:"wendu",sensor_type:"温度传感器"}
//};
//var device4={
//    device_id:5,
//    name:"车间的传感器",
//    profile:"测量车间的温度",
//    sensors:{sensor_id:2,name:"wendu",sensor_type:"温度传感器"}
//};
//mongoose.model('Device').create(device4);
//mongoose.model('Device').create([device1,device2,device3]);

//
// var value;
// var ids=[371394,8458844,13867330,8391952];
//
// var count=0;
// _.each(ids,function(id){
//
//   var endTime=1463500800;
//   var timestamp=endTime*1000;
//
//   for(var i=0;i<2400;i++){
//     value=_.random(-10,42.2);
//      mongoose.model('SensorValue').create({sensor_id:id,value:value,timestamp:timestamp},function(err,sensors){
//          if(err){
//              return false;
//          }
//          console.log(++count);
//      });
//      endTime=endTime-3600;//一小时一个数据点
//      timestamp=endTime*1000;
//
//   }
// });
