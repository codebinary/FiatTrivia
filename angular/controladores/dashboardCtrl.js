var app = angular.module('fiatTrivia.dashboardCtrl', []);

app.controller('dashboardCtrl', ['$scope', function($scope){
	$scope.activar('mDashboard', '', 'Dashboard', 'información');
}]);