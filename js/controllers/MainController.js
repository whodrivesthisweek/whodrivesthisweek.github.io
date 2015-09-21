// Standard Rotation: CONDOR, SNAKE, GIMLI, LENNI/CARLOS
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'SNAKE',
      day: new Date('2015','08','21')
    },
    {
      name: 'GIMLI',
      day: new Date('2015','08','28')
    },
    {
      name: 'CARLOS',
      day: new Date('2015','09','5')
    },
    {
      name: 'CONDOR',
      day: new Date('2015','09','12')
    },
    {
      name: 'SNAKE',
      day: new Date('2015','09','19')
    },
    {
      name: 'GIMLI',
      day: new Date('2015','09','26')
    },
    {
      name: 'CARLOS',
      day: new Date('2015','10','2')
    },
    {
      name: 'CONDOR',
      day: new Date('2015','10','9')
    },
    {
      name: 'SNAKE',
      day: new Date('2015','10','16')
    },
    {
      name: 'GIMLI',
      day: new Date('2015','10','23')
    },
    {
      name: 'CARLOS',
      day: new Date('2015','10','30')
    },
    {
      name: 'CONDOR',
      day: new Date('2015','11','7')
    },
    {
      name: 'SNAKE',
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
  $scope.calendar = [
    {
      sun: ,
      mon: ,
      tue: 1,
      wed: 2,
      thu: 3,
      fri: 4,
      sat: 5,
    },
    {
      sun: 6,
      mon: 7,
      tue: 8,
      wed: 9,
      thu: 10,
      fri: 11,
      sat: 12,
    },
    {
      sun: 13,
      mon: 14,
      tue: 15,
      wed: 16,
      thu: 17,
      fri: 18,
      sat: 19,
    }
    {
      sun: 20,
      mon: 21,
      tue: 22,
      wed: 23,
      thu: 24,
      fri: 25,
      sat: 26,
    },
    {
      sun: 27,
      mon: 28,
      tue: 29,
      wed: 30,
      thu: ,
      fri: ,
      sat: ,
    }
  ]
}]);
