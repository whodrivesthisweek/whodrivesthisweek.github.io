// Standard Rotation: SNAKE, CONDOR, GIMLI
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'CONDOR',
      day: new Date('2016','5','6')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','5','13')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','5','20')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','5','27')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','6','4')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','6','11')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','6','18')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','6','25')
    }
  ]
  $scope.holidays = [
    {
      name: 'Independence Day',
      day: new Date('2016', '6', '4')
    },
    {
      name: 'Labor Day',
      day: new Date('2016', '8', '8')
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
  ]
}]);
