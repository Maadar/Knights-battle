(function() {
  'use strict';

  angular
    .module('mainModule')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Block) {
    $scope.blocks = new Array(49);

    $scope.list1 = [];
    angular.forEach($scope.images, function(val, key) {
      $scope.list1.push({});
    });
      var blocksList = [];
      for (let i=1; i<=$scope.blocks.length; i++) {
        $scope.Block = new Block();
        $scope.Block.setId(i-1);

        blocksList.push($scope.Block);
      };
      console.log(blocksList);

      $scope.check = function(index) {
        angular.forEach(blocksList, function(block) {
          if (block.id === index) {
            console.log(block);
          }
        });
      };

    $scope.list2 = [
      { 'title': 'Horse1', 'drag': true }
    ];

    $scope.startCallback = function(event, ui, title, index) {
      console.log(index);
      console.log('You started draggin: ' + title.title);
      $scope.draggedTitle = title.title;
      console.log($scope.draggedTitle);
    };

    $scope.stopCallback = function(event, ui) {
      console.log('Why did you stop draggin me?');
    };

    $scope.dragCallback = function(event, ui) {
      console.log('hey, look I`m flying');
    };

    $scope.dropCallback = function(event, ui, index) {
      angular.forEach(blocksList, function(element) {
        if (element.id === index) {
          element.isSelected = true;
          console.log(element);
        }
      });
    };

    $scope.overCallback = function(event, ui) {
      console.log('Look, I`m over you');
    };

    $scope.outCallback = function(event, ui) {
      console.log('I`m not, hehe');
    };
  }
  //   var blocksList = [];
  //   $scope.items = new Array(49);
  //
  //   for (let i=1; i<=$scope.items.length; i++) {
  //     $scope.Block = new Block();
  //     $scope.Block.setId(i-1);
  //
  //     blocksList.push($scope.Block);
  //   };
  //   $scope.check = function(index) {
  //     angular.forEach(blocksList, function(block) {
  //       if (block.id === index) {
  //         console.log(block);
  //       }
  //     });
  //   };
  //   console.log(blocksList);
  // }
})();
