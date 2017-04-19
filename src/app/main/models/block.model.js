(function() {
  'use strict';

  angular
    .module('mainModule')
    .factory('Block', BlockModel);

  /** @ngInject */
  function BlockModel() {

    var Block = function(id, isSelected) {
      this.id = id || 0;
      this.isSelected = false;
    }

    Block.prototype = {
      setId: function(id) {
        this.id = id;
      }
    };
    return Block;
  }
})();
