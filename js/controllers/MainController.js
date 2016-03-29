// Standard Rotation: SNAKE, CONDOR, GIMLI
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'CONDOR',
      day: new Date('2016','2','28')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','3','4')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','3','11')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','3','18')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','3','25')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','4','2')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','4','9')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','4','16')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','4','23')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','4','30')
    }
  ]
  $scope.holidays = [
    {
      name: 'Memorial Day',
      day: new Date('2016', '4', '30')
    },
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
