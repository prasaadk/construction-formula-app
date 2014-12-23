angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Rates', function() {
  // Might use a resource here that returns a JSON array

  var materialRates = {
      unit: "Cum",
      cement: 350,
      rs: 1588.05,
      cs: 882.05,
      aggregate: 776.38
  };

  return {
    getMaterialRates: function() {
      return JSON.parse(window.localStorage['materialRates'] || JSON.stringify(materialRates));
    },
    save: function(rates) {
        var conversionRate = 0.3529;
        var ratesInCum = rates;
        if (rates.unit == "Brass") {
            ratesInCum = convertTo(rates,"Cum");
        }
        window.localStorage['materialRates'] = JSON.stringify(ratesInCum);
    },
    convertTo: function(rates, to) {
        var conversionRate = 0.3529;
        if(to == "Cum" && rates.unit != "Cum") {
            var unit = to;
            var cement = rates.cement;
            var rs = rates.rs * conversionRate;
            var cs = rates.cs * conversionRate;
            var aggregate = rates.aggregate * conversionRate;
            
            return {
                unit: unit,
                cement: cement,
                rs: rs,
                cs: cs,
                aggregate: aggregate
            };
        };
        if(to == "Brass" && rates.unit != "Brass") {
            var unit = to;
            var cement = rates.cement;
            var rs = rates.rs / conversionRate;
            var cs = rates.cs / conversionRate;
            var aggregate = rates.aggregate / conversionRate;
            
            return {
                unit: unit,
                cement: cement,
                rs: rs,
                cs: cs,
                aggregate: aggregate
            }; 
        }
        
    }
  }
});
