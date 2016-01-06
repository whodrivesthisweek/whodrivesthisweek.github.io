// Standard Rotation: CONDOR, SNAKE, GIMLI, LENNI/CARLOS
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'SNAKE',
      day: new Date('2016','0','4')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','0','11')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','0','18')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','0','25')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','1','1')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','1','8')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','1','15')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','1','22')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','1','29')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','2','7')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','2','14')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','2','21')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','2','28')
    },
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
      name: 'Christmas Eve (Observed)',
      day: new Date('2016', '11', '23')
    },
    {
      name: 'Christmas Day (Observed)',
      day: new Date('2016', '11', '26')
    },
    {
      name: "New Year's Eve (Observed)",
      day: new Date('2016', '11', '30')
    },
    {
      name: "New Year's Day (Observed)",
      day: new Date('2017', '0', '2')
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
