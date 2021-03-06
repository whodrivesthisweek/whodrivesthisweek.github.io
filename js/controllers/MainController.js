// Standard Rotation: SNAKE, CONDOR, GIMLI
// name: code name for driver
// day: first day of week, NOTE: month is 0 indexed ie, January = month 0, February = month 1, etc
// special: row highlighting based on class, D = deviation from normal rotation, H = holiday week

app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'SNAKE',
      day: new Date('2017','0','16'),
      special: 'D'
    },
    {
      name: 'GIMLI',
      day: new Date('2017','0','23'),
      special: 'D'
    },
    {
      name: 'CONDOR',
      day: new Date('2017','0','30')
    },
    {
      name: 'GIMLI',
      day: new Date('2017','1','6')
    },
    {
      name: 'SNAKE',
      day: new Date('2017','1','13')
    },
    {
      name: 'CONDOR',
      day: new Date('2017','1','20')
    },
    {
      name: 'GIMLI',
      day: new Date('2017','1','27')
    }
  ];
  
  $scope.holidays = [
    {
      name: "Memorial Day",
      day: new Date('2017', '4', '29')
    },
    {
      name: "Independence Day",
      day: new Date('2017', '6', '4')
    },
    {
      name: "Labor Day",
      day: new Date('2017', '8', '4')
    },
    {
      name: "Thanksgiving Day",
      day: new Date('2017', '10', '23')
    },
    {
      name: "Day after Thanksgiving",
      day: new Date('2017', '10', '24')
    },
    {
      name: "Christmas Eve (obs.)",
      day: new Date('2017', '11', '22')
    },
    {
      name: "Christmas Day",
      day: new Date('2017', '11', '25')
    },
    {
      name: "New Year's Eve (obs.)",
      day: new Date('2017', '11', '29')
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
