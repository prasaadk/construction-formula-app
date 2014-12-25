angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('FindRatioCtrl', ['$rootScope', '$scope', function($rootScope, $stateParams, $scope) {
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
    $rootScope.settings = {
        enableCum: true
    };
    
    $scope.unit = function () {
        return $rootScope.settings.enableCum ? "Cum":"Brass";
    };

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

        if(!$rootScope.settings.enableCum) {
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

.controller('RatesCtrl', ['$rootScope', '$scope', 'Rates',function($rootScope, $scope, Rates) {
    var conversionRate = 0.3529;
    $rootScope.rateSettings = {
        enableCum: true
    };

    var unit = function() {
        return $rootScope.rateSettings.enableCum ? "Cum" : "Brass";
    };
    
    $rootScope.rateUnit = unit;

    $rootScope.convert = function() {
        $rootScope.materialRates = Rates.convertTo($rootScope.materialRates, unit());
    };

   $rootScope.materialRates = Rates.getMaterialRates();
   $rootScope.rateSettings.enableCum = $rootScope.materialRates.unit == "Cum"?true:false;
   $rootScope.saveMaterialRates = function () {
      Rates.save($rootScope.materialRates);
   };
}])


.controller('FindCostsCtrl', ['$rootScope', '$scope', 'Rates', function($rootScope, $scope, Rates) {
    $rootScope.materialRates = Rates.getMaterialRates();

}]);
