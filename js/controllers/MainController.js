// Standard Rotation: SNAKE, CONDOR, GIMLI
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'SNAKE',
      day: new Date('2016','7','1'),
      special: ''
    },
    {
      name: 'GIMLI',
      day: new Date('2016','7','8'),
      special: 'D'
    },
    {
      name: 'SNAKE/CONDOR',
      day: new Date('2016','7','15'),
      special: 'D'
    },
    {
      name: 'SNAKE/CONDOR',
      day: new Date('2016','7','22'),
      special: 'D'
    },
    {
      name: 'CONDOR',
      day: new Date('2016','7','29'),
      special: ''
    },
    {
      name: 'GIMLI ',
      day: new Date('2016','8','5'),
      special: 'H'
    },
    {
      name: 'SNAKE',
      day: new Date('2016','8','12'),
      special: ''
    },
    {
      name: 'CONDOR',
      day: new Date('2016','8','19'),
      special: ''
    },
    {
      name: 'GIMLI',
      day: new Date('2016','8','26'),
      special: ''
    },
    {
      name: 'SNAKE',
      day: new Date('2016','9','3'),
      special: ''
    },
    {
      name: 'CONDOR',
      day: new Date('2016','9','10'),
      special: ''
    },
    {
      name: 'GIMLI',
      day: new Date('2016','9','17'),
      special: ''
    },
    {
      name: 'SNAKE',
      day: new Date('2016','9','24'),
      special: ''
    },
    {
      name: 'CONDOR',
      day: new Date('2016','9','31'),
      special: ''
    },
    {
      name: 'GIMLI',
      day: new Date('2016','10','7'),
      special: ''
    },
    {
      name: 'SNAKE',
      day: new Date('2016','10','14'),
      special: ''
    },
    {
      name: 'CONDOR',
      day: new Date('2016','10','21'),
      special: 'H'
    },
    {
      name: 'GIMLI',
      day: new Date('2016','10','28'),
      special: ''
    },
    {
      name: 'SNAKE',
      day: new Date('2016','11','5'),
      special: ''
    },
    {
      name: 'CONDOR',
      day: new Date('2016','11','12'),
      special: ''
    },
    {
      name: 'GIMLI',
      day: new Date('2016','11','19'),
      special: 'H'
    }
  ];
  
  $scope.specials = [
    {
      name: 'Labor Day',
      day: new Date('2016', '8', '5')
    },
    {
      name: 'Thanksgiving Day',
      day: new Date('2016', '10', '24')
    },
    {
      name: 'Day After Thanksgiving',
      day: new Date('2016', '10', '25')
    },
    {
      name: 'Christmas Eve (obs.)',
      day: new Date('2016', '11', '23')
    },
    {
      name: 'Christmas Day (obs.)',
      day: new Date('2016', '11', '26')
    },
    {
      name: "New Year's Eve (obs.)",
      day: new Date('2016', '11', '30')
    },
    {
      name: "New Year's Day (obs.)",
      day: new Date('2017', '0', '2')
    }
  ];
  
  $scope.getClass = function (week) {
    return {
      holiday: week.special === 'H',
      deviation: week.special === 'D'
    };
  };
  
}]);
