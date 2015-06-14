app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      drvName: 'LENNI / CARLOS',
      drvDate: new Date('2015', '05', '15')
    },
    {
      drvName: 'CONDOR',
      drvDate: new Date('2015', '05', '22')
    },
    {
      drvName: 'SNAKE',
      drvDate: new Date('2015', '05', '29')
    },
    {
      drvName: 'GIMLI',
      drvDate: new Date('2015', '06', '06')
    },
    {
      drvName: 'LENNI / CARLOS',
      drvDate: new Date('2015', '06', '13')
    },
    {
      drvName: 'CONDOR',
      drvDate: new Date('2015', '06', '20')
    },
    {
      drvName: 'SNAKE',
      drvDate: new Date('2015', '06', '27')
    },
    {
      drvName: 'GIMLI',
      drvDate: new Date('2015', '07', '03')
    },
    {
      drvName: 'LENNI / CARLOS',
      drvDate: new Date('2015', '07', '10')
    },
    {
      drvName: 'CONDOR',
      drvDate: new Date('2015', '07', '17')
    },
    {
      drvName: 'SNAKE',
      drvDate: new Date('2015', '07', '24')
    },
    {
      drvName: 'GIMLI',
      drvDate: new Date('2015', '07', '31')
    }
  ]
  $scope.holidays = [
    {
      holName: 'Independence Day (Observed)',
      holDate: new Date('2015', '06', '03'),
    },
    {
      holName: 'Labor Day',
      holDate: new Date('2015', '08', '07'),
    },
    {
      holName: 'Thanksgiving Day',
      holDate: new Date('2015', '10', '25'),
    },
    {
      holName: 'Day After Thanksgiving',
      holDate: new Date('2015', '10', '26'),
    },
    {
      holName: 'Christmas Eve',
      holDate: new Date('2015', '11', '24'),
    },
    {
      holName: 'Christmas Day',
      holDate: new Date('2015', '11', '25'),
    },
    {
      holName: "New Year's Eve",
      holDate: new Date('2015', '11', '31'),
    }
  ]
}]);