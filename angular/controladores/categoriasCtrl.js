var app = angular.module('fiatTrivia.categoriasCtrl', []);

app.controller('categoriasCtrl', ['$scope','Categorias',  function($scope, Categorias){
	$scope.activar('mCategorias', '', 'Categorias', 'listado');
	$scope.categoria = {};

	Categorias.cargarCategorias().then(function(){
		$scope.categoria = Categorias;
	});

	console.log($scope.categoria);

	
}]);