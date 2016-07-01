(function() {
  'use strict';

  angular
    .module('myIot', ['ngResource', 'ui.router', 'mgcrea.ngStrap', 'chart.js'])
    .constant('ApiUrl', "http://localhost:3000/api/")
    .config(config)
    .run(runBlock);

  /** @ngInject */
  function config(ChartJsProvider, $logProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#41A5F4', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      animationSteps: 15,
      pointDot: false,
      showTooltips: false,
      scaleGridLineColor: "#292929",
      scaleGridLineWidth: 1,
      scaleShowVerticalLines: false,
      responsive: true
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('Doughnut', {
      animateScale: true
    });

    // Enable log
    $logProvider.debugEnabled(true);

  }


  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }



})();
