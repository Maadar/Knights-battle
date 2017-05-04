(function() {
  'use strict';

  angular
    .module('mainModule')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Block, _) {

    $scope.blocks = new Array(49);
    $scope.blocksList = [];
    $scope.container = [];
    $scope.horses = [];
    $scope.displayBoard = false;

    $scope.setHorses = function(form1, form2) {
      if (form1.$valid && form2.$valid && form1.$modelValue !== form2.$modelValue) {
        for (let i = 0; i < 49; i++) {
          if (i === 0) {
            $scope.horses.push({ 'name': form1.$modelValue, 'drag': true, 'move': true });
          } else if (i === 48) {
            $scope.horses.push({ 'name': form2.$modelValue, 'drag': true, 'move': false });
          } else {
            $scope.horses.push({'move': true});
          }
        }

        for (let i = 1; i <= $scope.blocks.length; i++) {
          $scope.Block = new Block();
          $scope.blocksList.push($scope.Block);
        };

        $scope.displayBoard = true;
        $scope.container = $scope.horses;
      }
    }

    $scope.canJump = function(index) {
      if (this.Block.possibleJumps == 0) {
        $scope.horses[index].lose = true;
        $scope.gameOverAlert = "Player " + $scope.horses[index].name + " lost";
        delete $scope.blocksList;
      }

      if ($scope.horses[index].move === true && $scope.horses[index].lose !== true) {
        $scope.Block.setData(index, $scope.blocksList, $scope.blocksList[index]);
        $scope.Block.negative();
      }
    }

    $scope.cantJump = function(index) {
      angular.forEach($scope.blocksList, function(element) {
        element.canJump = false;
      });
    }

    $scope.dropCallback = function(event, ui, index) {
      $scope.Block.disableBlock();
      angular.extend($scope.blocksList[index], $scope.horses[index]);
      angular.forEach($scope.container, function(element) {
        element.move = true;
      });
      $scope.container[index].move = !$scope.container[index].move;
    };
  }
})();
