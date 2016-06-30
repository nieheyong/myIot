# 前端
前端使用AngularJS框架，UI-Router路由控制，ng-resource与后台API交互，Bootstrap的[Cyborg主题](https://bootswatch.com/cyborg/)作为样式库,
[AngularStrap](http://mgcrea.github.io/angular-strap/)作为控件库,
[Angular Chart图表库](http://jtblin.github.io/angular-chart.js/)显示曲线图.
### 开发

##### 先安装工具 `gulp` 和 `bower`:
```
$ npm install -g gulp bower
```
##### 安装项目及依赖
```
$ git clone https://github.com/nieheyong/myIot.git
$ cd myIot/angular
$ npm install
$ bower install
```
##### 运行
```
$ gulp serve
```
会在浏览器中自动打开 http://localhost:3000

## 生产环境构建  

```
$ gulp build
```
## 界面效果
![Image of devices page](../doc/img/devices.png)
![Image of dashboard page](../doc/img/dashboard.png)
