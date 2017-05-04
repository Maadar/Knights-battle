(function() {
  'use strict';

  angular
    .module('mainModule')
    .factory('Block', BlockModel);

  /** @ngInject */
  function BlockModel() {

    var Block = function(isSelected, canJump) {
      this.isSelected = true;
      this.canJump = false;
    }

    Block.prototype = {
      setData: function(index, blocksList, history) {
        this.index = index;
        this.blocksList = blocksList;
        this.history = history;
      },

      modify: function(possibleJumps) {
        angular.forEach(possibleJumps, function(element) {
          element.canJump = true;
        });
      },

      addPossibleJumps: function(data) {
        for (let key in data) {
          if (data[key].indexOf(this.index) !== -1) {
            var intKey = parseInt(key);
            if (this.blocksList[this.index+(intKey)].isSelected === true
              && this.blocksList[this.index+(intKey)].name === undefined) {
              this.possibleJumps.push(this.blocksList[this.index+(intKey)]);
            }
          }
        }
        return this.possibleJumps;
      },

      positive: function() {
        this.possibleJumps = [];
        var plusPositions = {
          "5":  [2,3,4,5,6,9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,31,32,33,34,37,38,39,40,41],
          "9":  [0,1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31,32,35,36,37,38,39],
          "13": [1,2,3,4,5,6,8,9,10,11,12,13,15,16,17,18,19,20,22,23,24,25,26,27,29,30,31,32,33,34],
          "15": [0,1,2,3,4,5,7,8,9,10,11,12,14,15,16,17,18,19,21,22,23,24,25,26,28,29,30,31,32,33]
        };
        this.modify(this.addPossibleJumps(plusPositions));
      },

      negative: function() {
        var minusPositions = {
          "-15": [15,16,17,18,19,20,22,23,24,25,26,27,29,30,31,32,33,34,36,37,38,39,40,41,43,44,45,46,47,48],
          "-13": [14,15,16,17,18,19,21,22,23,24,25,26,28,29,30,31,32,33,35,36,37,38,39,40,42,43,44,45,46,47],
          "-9":  [9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,31,32,33,34,37,38,39,40,41,44,45,46,47,48],
          "-5":  [7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31,32,35,36,37,38,39,42,43,44,45,46]
        };
        this.positive();
        this.modify(this.addPossibleJumps(minusPositions));
      },

      disableBlock: function() {
        this.history.isSelected = false;
      }

    };
    return Block;
  }
})();
