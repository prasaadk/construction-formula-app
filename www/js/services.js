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
    },
    evalute: function(inputParams, formula) {
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
