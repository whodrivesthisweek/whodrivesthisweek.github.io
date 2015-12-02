// Standard Rotation: CONDOR, SNAKE, GIMLI, LENNI/CARLOS
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'CARLOS',
      day: new Date('2015','10','30')
    },
    {
      name: 'SNAKE',
      day: new Date('2015','11','7')
    },
    {
      name: 'CONDOR',
      day: new Date('2015','11','14')
    },
    {
      name: 'GIMLI',
      day: new Date('2015','11','21')
    },
    {
      name: '',
      day: new Date('2015','11','28')
    },
    {
      name: 'CARLOS',
      day: new Date('2016','0','4')
    }
  ]
  $scope.holidays = [
    {
      name: 'Christmas Eve',
      day: new Date('2015', '11', '24')
    },
    {
      name: 'Christmas Day',
      day: new Date('2015', '11', '25')
    },
    {
      name: "New Year's Eve",
      day: new Date('2015', '11', '31')
    }
  ]
  $scope.month = [
    { 
      currmonth: 'OCTOBER',
      curryear: '2015'
    }
  ]
  $scope.calendar = [
    {
      sun: '',
      mon: '',
      tue: '',
      wed: '',
      thu: '1',
      fri: '2',
      sat: '3'
    },
    {
      sun: '4',
      mon: '5',
      tue: '6',
      wed: '7',
      thu: '8',
      fri: '9',
      sat: '10'
    },
    {
      sun: '11',
      mon: '12',
      tue: '13',
      wed: '14',
      thu: '15',
      fri: '16',
      sat: '17'
    },
    {
      sun: '18',
      mon: '19',
      tue: '20',
      wed: '21',
      thu: '22',
      fri: '23',
      sat: '24'
    },
    {
      sun: '25',
      mon: '26',
      tue: '27',
      wed: '28',
      thu: '29',
      fri: '30',
      sat: '31'
    }
  ]
}]);
