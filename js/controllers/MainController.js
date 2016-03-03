// Standard Rotation: SNAKE, CONDOR, GIMLI
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'GIMLI',
      day: new Date('2016','1','29')
    },
    {
      name: 'SNAKE',
      day: new Date('2016','2','7')
    },
    {
      name: 'GIMLI',
      day: new Date('2016','2','14')
    },
    {
      name: 'CONDOR',
      day: new Date('2016','2','21')
    },
    {
      name: 'SNAKE',
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
