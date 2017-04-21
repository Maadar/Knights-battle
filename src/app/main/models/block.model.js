(function() {
  'use strict';

  angular
    .module('mainModule')
    .factory('Block', BlockModel);

  /** @ngInject */
  function BlockModel() {

    var Block = function(id, isSelected, canJump) {
      this.id = id || 0;
      this.isSelected = true;
      this.canJump = false;
    }

    Block.prototype = {
      setId: function(id) {
        this.id = id;
      }
    };
    return Block;
  }
})();
