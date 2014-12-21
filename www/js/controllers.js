angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('FindRatioCtrl', function($scope) {
  $scope.validationError = {};
  $scope.ratioData = {};
  $scope.postData = {grade: "20", sandProportion: "50"};
  $scope.gradeRange = [6,7.5,10]
  for (i = 15;i<=80;i+=5) {
      $scope.gradeRange.push(i);
  }

  $scope.crushedSandProportion = function () {
      return 100 - parseInt($scope.postData.sandProportion);
  }

  $scope.riverSandProportion = function () {
      return parseInt($scope.postData.sandProportion);
  }

  $scope.ratio = function() {
      var constant = 30;
      var grade = parseInt($scope.postData.grade);

      var cement = 1;
      var sand = constant / grade;
      var aggregate = 2 * constant / grade;
      var ratio = {cement: cement, sand: sand.toFixed(2), aggregate: aggregate.toFixed(2)};
      $scope.ratioData = ratio;
      return ratio;
  };
})


.controller('FindQuantityCtrl', function($scope) {

})

.controller('FindCostCtrl', function($scope, Rates) {
  $scope.friends = Friends.all();
})

.controller('RatesCtrl', function($scope, $stateParams) {
  $scope.friend = Friends.get($stateParams.friendId);
})


//Not Useful

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
