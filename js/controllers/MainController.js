// Standard Rotation: SNAKE, CONDOR, GIMLI
// name: code name for driver
// day: first day of week, NOTE: month is 0 indexed ie, January = month 0, February = month 1, etc
// special: row highlighting based on class, D = deviation from normal rotation, H = holiday week

app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
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
  
  $scope.holidays = [
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
  
  $scope.date = new Date();
  
}]);
