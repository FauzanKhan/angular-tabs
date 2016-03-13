var app = angular.module('app', ['ngTabs']);

app.controller('masterController', ['$scope', function($scope){
	$scope.message = "Click on any of the above buttons to see the popovers in action"
	
}]);