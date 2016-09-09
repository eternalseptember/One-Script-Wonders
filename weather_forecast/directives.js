weatherApp.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.htm',
		replace: true,
		scope: {
			weatherObject: "=",
			convertToDateFunction: "&",
			dateFormat: "@"
		}
	}
});
