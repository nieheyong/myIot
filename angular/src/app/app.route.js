(function() {
  'use strict';

  angular
    .module('myIot')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/devices");
    $urlRouterProvider.when("", "/");

    $stateProvider
      .state('myDevice', {
        url: '/devices',
        templateUrl: 'app/my-device/my-device.html',
        controller: 'MyDeviceController',
        controllerAs: 'myDevice'
      }).state('dashboard', {
        url: '/dashboard/',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        params: {'device':null,'sensor': null}
      });
  }

})();
