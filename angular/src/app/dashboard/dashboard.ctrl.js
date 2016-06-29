(function() {
  'use strict';

  angular
    .module('myIot')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope, $stateParams, $state, resource, $timeout, $log, $interval) {
    $log.debug('DashboardController init');
    var vm = this;

    vm.device = $stateParams.device;
    vm.sensor = $stateParams.sensor;
    vm.showHistory = showHistory;
    vm.realTimeChart = {
      labels: [],
      data: [
        []
      ],
      option: {
        animation: false,
        datasetFill: true,
        scaleOverride: true, //是否用硬编码重写y轴网格线
        scaleSteps: 4, //y轴刻度的个数
        scaleStepWidth: 10, //y轴每个刻度的宽度
        scaleStartValue: 0, //y轴的起始值
        responsive: true,
        scaleLabel: "<%=value%> ℃"
      }
    };
    vm.chart = {
      series: ['22'],
      option: {
        pointDot: true,
        scaleOverride: true, //是否用硬编码重写y轴网格线
        scaleSteps: 6, //y轴刻度的个数
        scaleStepWidth: 10, //y轴每个刻度的宽度
        scaleStartValue: -15, //y轴的起始值
        responsive: true,
        scaleLabel: "<%=value%> ℃",
        tooltipTemplate: "<%= value %>℃"
      }
    };

    vm.histryChart = {
      labels: [],
      data: []
    };

    activate();

    function activate() {
      vm.historyDay = (new Date().getTime()) - 10 * 24 * 3600 * 1000;
      vm.showHistory();
      var latsTimestamp = 0;
      var realTimer = $interval(function() {
        resource.sensorValue.realtime.get({
          sensor_id: $stateParams.sensor.sensor_id,
          latsTimestamp: latsTimestamp
        }, function(data) {
          if (data.data.length) {
            latsTimestamp = data.latsTimestamp;
            angular.forEach(data.data, function(data) {
              vm.realTimeChart.labels.push('');
              vm.realTimeChart.data[0].push(data);
            });

            if (vm.realTimeChart.labels.length > 60) {
              vm.realTimeChart.labels.splice(0, vm.realTimeChart.labels.length - 60);
              vm.realTimeChart.data[0].splice(0, vm.realTimeChart.data[0].length - 60);
            }
          }
        });
      }, 500);

      $scope.$on('$stateChangeStart', function() {
        $interval.cancel(realTimer); //页面切换后停止获取实时数据
      });

    }

    function showHistory() {
      resource.sensorValue.history.query({
        sensor_id: $stateParams.sensor.sensor_id,
        start: vm.historyDay + 1,
        end: vm.historyDay + 86400000
      }, function(data) {
        vm.histryChart.labels = [];
        vm.histryChart.data[0] = [];
        angular.forEach(data, function(obj, index) {
          vm.histryChart.labels.push(index + '时');
          vm.histryChart.data[0].push(obj.value.toFixed(1));
        });
      });
    }

  }
})();
