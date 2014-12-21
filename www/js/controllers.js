angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('FindRatioCtrl', function($scope) {
  $scope.validationError = {};
  $scope.ratioData = {};
  $scope.postData = {grade: "20"};
  $scope.gradeRange = [6,7.5,10]
  for (i = 15;i<=80;i+=5) {
      $scope.gradeRange.push(i);
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


.controller('FindQuantity', function($scope, $stateParams, Rates) {
  $scope.chat = Formulas.get($stateParams.chatId);
  $scope.friendsList = [];
  $scope.friendName = {};
  $scope.calculate = function() {
      console.log("adding a new friend");
      $scope.friendsList.push($scope.friendName.text);
  };
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
