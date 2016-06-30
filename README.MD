# myIot
  我的毕业设计，一个基于物联网的温度采集系统。ESP8266 WIFI芯片采集温度信息，服务器端使用Node.js 的Express框架编程实现,浏览器端展示温度曲线，使用Angular Js框架实现。

### 目录结构

```
.
├── README.md           
├── server                     // 服务端目录
├── angular                    // angular端目录
├── doc                        // 毕设相关文档
├── hardware                   // ESP8266硬件端目录
.
```
## 系统概述
### 框图:
![Image of system page](doc/img/system.png)
### [硬件端](https://github.com/nieheyong/myIot/tree/master/hardware)
温度信息采集主要使用 ESP8266 WIFI 芯片通过 DHT 22 传感器采集环境温度信息,通过WIFI将温度信息发往后台服务器。

### [服务端](https://github.com/nieheyong/myIot/tree/master/Serve)

后台服务器采用 Node.js 编程,使用Express框架，MongoDB和Redis数据库。为前端和温度信息采集硬件端提供 REST API 服务。

### [前端](https://github.com/nieheyong/myIot/tree/master/angular)
前端使用 AngularJS ,Chart.js 图表库可视化温 度数据,Bootstrap 作为样式库并提供响应式布局。通过 HTTP 协议获取后台的温度数据绘制温度曲线。支持实时温度曲线和历史温度查看。


## 界面效果
![Image of devices page](doc/img/devices.png)
![Image of dashboard page](doc/img/dashboard.png)
