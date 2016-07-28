// Standard Rotation: SNAKE, CONDOR, GIMLI
app.controller('MainController', ['$scope', function($scope) {
  $scope.schedule = [
    {
      name: 'SNAKE',
      day: new Date('2016','7','1'),
      holiday: 'N'
    },
    {
      name: 'GIMLI',
      day: new Date('2016','7','8'),
      holiday: 'N'
    },
    {
      name: 'SNAKE/CONDOR',
      day: new Date('2016','7','15'),
      holiday: 'N'
    },
    {
      name: 'SNAKE/CONDOR',
      day: new Date('2016','7','22'),
      holiday: 'N'
    },
    {
      name: 'CONDOR',
      day: new Date('2016','7','29'),
      holiday: 'N'
    },
    {
      name: 'GIMLI ',
      day: new Date('2016','8','5'),
      holiday: 'Y'
    },
    {
      name: 'SNAKE',
      day: new Date('2016','8','12'),
      holiday: 'N'
    },
    {
      name: 'CONDOR',
      day: new Date('2016','8','19'),
      holiday: 'N'
    },
    {
      name: 'GIMLI',
      day: new Date('2016','8','26'),
      holiday: 'N'
    },
    {
      name: 'SNAKE',
      day: new Date('2016','9','3'),
      holiday: 'N'
    },
    {
      name: 'CONDOR',
      day: new Date('2016','9','10'),
      holiday: 'N'
    },
    {
      name: 'GIMLI',
      day: new Date('2016','9','17'),
      holiday: 'N'
    },
    {
      name: 'SNAKE',
      day: new Date('2016','9','24'),
      holiday: 'N'
    },
    {
      name: 'CONDOR',
      day: new Date('2016','9','31'),
      holiday: 'N'
    },
    {
      name: 'GIMLI',
      day: new Date('2016','10','7'),
      holiday: 'N'
    },
    {
      name: 'SNAKE',
      day: new Date('2016','10','14'),
      holiday: 'N'
    },
    {
      name: 'CONDOR',
      day: new Date('2016','10','21'),
      holiday: 'Y'
    },
    {
      name: 'GIMLI',
      day: new Date('2016','10','28'),
      holiday: 'N'
    },
    {
      name: 'SNAKE',
      day: new Date('2016','11','5'),
      holiday: 'N'
    },
    {
      name: 'CONDOR',
      day: new Date('2016','11','12'),
      holiday: 'N'
    },
    {
      name: 'GIMLI',
      day: new Date('2016','11','19'),
      holiday: 'Y'
    }
  ];
  
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
  ];
  
  $scope.getClass = function (week) {
    return {
      holiday: week.holiday === 'Y'
    };
  };
  
}]);
