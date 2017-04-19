(function() {
  'use strict';

  angular
    .module('mainModule')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, GetJson, Block) {
    $scope.blocks = new Array(49);
    $scope.list1 = [];
    angular.forEach($scope.images, function(val, key) {
      $scope.list1.push({});
    });
    $scope.list2 = [
      { 'title': 'Horse1', 'url': 'assets/blackHorse.png', 'drag': true },
      { 'title': 'Horse2', 'url': 'assets/whiteHorse.png', 'drag': true }
    ];

    $scope.startCallback = function(event, ui, title) {
      console.log(title);
      console.log(ui);
      console.log(event);
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

    $scope.dropCallback = function(event, ui) {
      console.log(ui.offset);
      console.log('hey, you dumped me :-(' , $scope.draggedTitle);
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
