(function() {
  'use strict';

  angular
    .module('myIot')
    .controller('MyDeviceController', MyDeviceController);

  /** @ngInject */
  function MyDeviceController($state, resource, $timeout, $log) {

    $log.debug('MyDeviceController init');
    var vm = this;

    vm.getTheme=getTheme;
    vm.goDashboard = goDashboard;

    activate();

    function activate() {
      resource.device.query(function(data) {
        vm.devices = data;
      });
    }

    function getTheme(index){
      var themes=['primary','success','warning','danger','info'];
      return themes[index%5];
    }

    function goDashboard(device,sensor) {
      $state.go('dashboard', {
        device:device,
        sensor: sensor
      });
    }

  }
})();
