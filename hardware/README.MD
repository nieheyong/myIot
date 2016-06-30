# ESP8266硬件端
### ESP8266简介

ESP8266是[乐鑫espressif](http://espressif.com/)设计的wifi芯片，主要有以下特点：

-  801.11 b/g/n 2.4G~2.5G
-  32bit CPU Tensilica L106
-  80M&160M
-  RAM 32K+80K
-  10bit ADC
-  电源管理，深度睡眠10uA,关断电流小于5mA
-  天线分集
-  SDIO2.0 HSPI/SPI,UART,I2C,I2S,HW IR Remote,PWM,GPIO
-  工作温度-40~125
-  工作电压3.0~3.6V
-  GFN32

##### 使用的开发板--[NodeMCU](http://www.nodemcu.com/)

![NodeMCU](https://raw.githubusercontent.com/nodemcu/nodemcu-devkit-v1.0/master/Documents/NodeMCU_DEVKIT_1.0.jpg)
##### 使用的开发代码库--[Sming](https://github.com/SmingHub/Sming)
>  Sming - Open Source framework for high efficiency WiFi SoC ESP8266 native development with C++ language.

### 开发
- 按照[Sming说明](https://github.com/SmingHub/Sming)搭建开发环境
- 使用Sming fork 出来的一个分支作为SmingHome https://github.com/fcgdam/Sming (这个分支添加了对REST API的操作函数)
- 根据安装结果配置hardware/Makefile-user.mk文件
- 连接硬件到电脑(在hardware/Makefile-user.mk配置串口端口)

```
$ make flash    //向硬件写入程序
```
