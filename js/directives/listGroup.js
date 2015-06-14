app.directive('listGroup', function() {
	return {
  	restrict: 'E',
    scope: {
    	info: '='
    },
    templateUrl: 'js/directives/listGroup.html'
  };
});