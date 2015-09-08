// Standard Rotation: CONDOR, SNAKE, GIMLI, LENNI/CARLOS
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'SNAKE',
      day: new Date('2015', '07', '24')
    },
    {
      name: 'GIMLI',
      day: new Date('2015', '07', '31')
    },
    {
      name: 'CARLOS',
      day: new Date('2015','08','7')
    },
    {
      name: 'CONDOR',
      day: new Date('2015','08','14')
    },
    {
      name: 'SNAKE',
      day: new Date('2015','08','21')
    },
    {
      name: 'GIMLI?',
      day: new Date('2015','08','28')
    }
  ]
  $scope.holidays = [
    {
      name: 'Thanksgiving Day',
      day: new Date('2015', '10', '25'),
    },
    {
      name: 'Day After Thanksgiving',
      day: new Date('2015', '10', '26'),
    },
    {
      name: 'Christmas Eve',
      day: new Date('2015', '11', '24'),
    },
    {
      name: 'Christmas Day',
      day: new Date('2015', '11', '25'),
    },
    {
      name: "New Year's Eve",
      day: new Date('2015', '11', '31'),
    }
  ]
}]);
