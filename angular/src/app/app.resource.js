(function() {
  'use strict';

  angular
    .module('myIot')
    .factory('resource',resource);

  /** @ngInject */
  function resource($resource,ApiUrl) {
    return {
      device:$resource(ApiUrl+'devices'),
      sensorValue:{
        history:$resource(ApiUrl+'sensor/:sensor_id/value/history', { sensor_id: '@sensor_id' }),
        realtime:$resource(ApiUrl+'sensor/:sensor_id/value/realtime', { sensor_id: '@sensor_id' })
      }
    };
  }

})();
