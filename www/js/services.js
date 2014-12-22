angular.module('starter.services', [])

.factory('Formulas', function() {
  // Might use a resource here that returns a JSON array

  var formulas = [{
    id: 0,
    name: 'Formula 1',
    lastText: 'The material consumption for concrete',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    goals: ['The built up area feasible on the given plot area.'],
    inputs: [{label: 'First param', 
              type: 'Range',
              start: 0,
              end: 100,
              variable: 'x'},

             {label: 'Second param', 
              type: 'Number', 
              variable: 'y'}],
    formula: 'x + y'
  }, {
    id: 1,
    name: 'Formula 2',
    lastText: 'Grade of concrete for various proportions',
    face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg',
    goals: ['Actual grade of concrete for various proportions of the material being used.', 'The material consumption per unit volume for various ingredients used']
  }, {
    id: 2,
    name: 'Formula 3',
    lastText: 'Nominal mix to be maintained for various grades of concrete.',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Formula 4',
    lastText: 'To find built up area feasible on the plot area.',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Formula 5',
    lastText: 'Landed price per sqft.of built up area!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 5,
    name: 'Formula 6',
    lastText: 'Consumption of materials for built up area.',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 6,
    name: 'Formula 7',
    lastText: 'Consumption of materials for brick wall.',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return formulas;
    },
    get: function(formulaId) {
      for (var i = 0; i < formulas.length; i++) {
        if (formulas[i].id === parseInt(formulaId)) {
          return formulas[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Rates', function() {
  // Might use a resource here that returns a JSON array

  var materialRates = [{
      id: 0,
      name: "Cement",
      rate: "350",
      unit: "BAG"
  }, {
      id: 1,
      name: "River Sand",
      rate: "4500",
      unit: "Brass"
  }, {
      id: 2,
      name: "Crushed Sand",
      rate: "2500",
      unit: "Brass"
  }, {
      id: 3,
      name: "Aggregate (Coarse)",
      rate: "2200",
      unit: "Brass"
  }];

  return {
    all: function() {
      return JSON.parse(window.localStorage['materialRates'] || JSON.stringify(materialRates));
    },
    save: function(rates) {
        window.localStorage['materialRates'] = JSON.stringify(rates);
    }
  }
});
