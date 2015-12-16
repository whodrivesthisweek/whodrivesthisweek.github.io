// Standard Rotation: CONDOR, SNAKE, GIMLI, LENNI/CARLOS
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
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
      name: 'SNAKE',
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
    },
    {
      name: "New Year's Day",
      day: new Date('2016', '0', '1')
    }
  ]
  $scope.month = [
    { 
      currmonth: 'DECEMBER',
      curryear: '2015'
    }
  ]
  $scope.calendar = [
    {
      sun: '',
      mon: '',
      tue: '1',
      wed: '2',
      thu: '3',
      fri: '4',
      sat: '5'
    },
    {
      sun: '6',
      mon: '7',
      tue: '8',
      wed: '9',
      thu: '10',
      fri: '11',
      sat: '12'
    },
    {
      sun: '13',
      mon: '14',
      tue: '15',
      wed: '16',
      thu: '17',
      fri: '18',
      sat: '19'
    },
    {
      sun: '20',
      mon: '21',
      tue: '22',
      wed: '23',
      thu: '24',
      fri: '25',
      sat: '26'
    },
    {
      sun: '27',
      mon: '28',
      tue: '29',
      wed: '30',
      thu: '31',
      fri: '',
      sat: ''
    }
  ]
}]);
