// Standard Rotation: SNAKE, CONDOR, GIMLI
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'SNAKE',
      day: new Date('2016','7','1')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','7,'8')
    },
    {
      name: 'SNAKE/CONDOR',
      day: new Date('2016','7','15')
    },
    {
      name: 'SNAKE/CONDOR',
      day: new Date('2016','7','22')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','7','29')
    },
    {
      name: 'GIMLI - H',
      day: new Date('2016','8','5')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','8','12')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','8','19')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','8','26')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','9','3')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','9','10')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','9','17')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','9','24')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','9','31')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','10','7')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','10','14')
    },
    {
      name: 'CONDOR - H',
      day: new Date('2016','10','21')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','10','28')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','11','5')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','11','12')
    },
    {
      name: 'GIMLI - H',
      day: new Date('2016','11','19')
    }
  ]
  $scope.holidays = [
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
  ]
}]);
