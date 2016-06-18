var app = angular.module('fiatTrivia.categorias', []);

app.factory('Categorias', ['$http', '$q', function($http, $q){

	var self = {
		'cargando'		: false,
		'categorias'	: [],

		cargarCategorias: function(){
			var d = $q.defer();
			$http.get('http://localhost:8000/categorias')
				.success(function(data){
					console.log(data)
					return d.resolve();
				});

				return d.promise;
		}
	};
	return self;
}]);