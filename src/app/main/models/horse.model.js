(function() {
  'use strict';

  angular
    .module('mainModule')
    .factory('Horse', HorseModel);

  /** @ngInject */
  function HorseModel() {

    var Horse = function(title, drag, move) {
      this.title = title;
      this.drag = true;
      this.title = title;
    }
    return Horse;
  }
})();
