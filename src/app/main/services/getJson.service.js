(function() {
  'use strict';

  angular
    .module('mainModule')
    .factory('GetJson', GetJson);

    /** @ngInject */
    function GetJson($resource) {
      var data = $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
        update: {
          method: 'PUT'
        }
      });
      return data;
    }
})();
