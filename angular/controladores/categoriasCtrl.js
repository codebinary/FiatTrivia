var app = angular.module('fiatTrivia.categoriasCtrl', []);

app.controller('categoriasCtrl', ['$scope','Categorias',  function($scope, Categorias){
	$scope.activar('mCategorias', '', 'Categorias', 'listado');
	$scope.categoria = {};

	//Variable para la edicion
	$scope.categoriaSel = {};

	Categorias.cargarCategorias().then(function(){
		$scope.categoria = Categorias;
		console.log($scope.categoria);
	});

	/*================================================
	=            Mostrar modal de edición            =
	================================================*/
	$scope.mostrarModal = function( categoria ){
		//console.log(categoria);
		angular.copy(categoria, $scope.categoriaSel)

		$("#modal_categoria").modal();
	}

	/*============================================
	=            Función para guardar            =
	============================================*/
	$scope.guardar = function(categoria){
		Categorias.guardar(categoria).then(function(){
			
		});
	}
	
	
	

	
	
	

	
}]);