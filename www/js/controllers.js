angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('FindRatioCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  $rootScope.postData = {grade: "20", sandProportion: "50"};

  $rootScope.crushedSandProportion = function () {
      return 100 - parseInt($rootScope.postData.sandProportion);
  }

  $rootScope.riverSandProportion = function () {
      return parseInt($rootScope.postData.sandProportion);
  }

  $rootScope.ratio = function() {
      var constant = 30;
      var grade = parseInt($rootScope.postData.grade);

      var cement = 1;
      var sand = constant / grade;
      var aggregate = 2 * constant / grade;
      var cs = sand*$rootScope.crushedSandProportion()/100;
      var rs = sand*$rootScope.riverSandProportion()/100;
      var ratio = {cement: cement, 
                   sand: parseFloat(sand.toFixed(2)), 
                   cs: parseFloat(cs.toFixed(2)), 
                   rs: parseFloat(rs.toFixed(2)),
                   aggregate: parseFloat(aggregate.toFixed(2))
                  };
      return ratio;
  };

}])


.controller('FindQuantityCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
    var conversionRate = 0.3529;
    $rootScope.unit = "Cum";
    $rootScope.unitName = function () {
        console.log("unit: " + $rootScope.unit);
        if($rootScope.unit == "Cum") {
            $rootScope.unit = "Brass";
        }else{
            $rootScope.unit = "Cum";
        }
    }
    var ratio = null;
    try {
        ratio = $rootScope.ratio();
        $rootScope.ratioData = ratio;
    } catch (err) {
        $rootScope.ratioData = {cement: 1,
                                cs: 0,
                                rs: 0,
                                aggregate: 0
                               };
    }

    $rootScope.calculateGrade = function() {
        var cs = parseFloat($rootScope.ratioData.cs);
        var rs = parseFloat($rootScope.ratioData.rs);
        var aggregate = parseFloat($rootScope.ratioData.aggregate);
        var grade = 90/(cs+rs+aggregate)
        if(grade == Infinity){
            return 100;
        }
        return grade.toFixed(0);
    };

    $rootScope.calculateQuantity = function() {
        var mixRatios = $rootScope.ratioData;
        var cs = mixRatios.cs;
        var rs = mixRatios.rs;
        var aggregate = mixRatios.aggregate;
        var denominator = (1 + cs + rs + aggregate);

        var cementQ = 1.52 * 28.8 / denominator;
        var csQ = 1.52 * cs / denominator;
        var rsQ = 1.52 * rs / denominator;
        var aggregateQ = 1.52 * aggregate / denominator;

        if($rootScope.unit == "Brass") {
            csQ = csQ * conversionRate;
            rsQ = rsQ * conversionRate;
            aggregateQ = aggregateQ * conversionRate;
        }

        return {cement: parseFloat(cementQ.toFixed(2)),
                cs: parseFloat(csQ.toFixed(3)),
                rs: parseFloat(rsQ.toFixed(3)),
                aggregate: parseFloat(aggregateQ.toFixed(3))
               };
    };
}])

.controller('FindCostCtrl', ['$rootScope', '$scope', function($rootScope, $scope, Rates) {

}])

.controller('RatesCtrl', ['$rootScope', '$scope', function($scope) {
  $rootScope.materialRates = Rates.getMaterialRates();
  $rootScope.saveMaterialRates = function () {
      Rates.save($rootScope.materialRates);
  };
}])


//Not Useful

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
