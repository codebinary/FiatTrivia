var app = angular.module('fiatTrivia.categorias', []);

app.factory('Categorias', ['$http', '$q', function($http, $q){

	var self = {
		'cargando'		: false,
		'categorias'	: [],

		guardar: function(categoria){
			var d = $q.defer();
			$http.patch('http://localhost:8000/categorias', categoria)
				.success(function(respuesta){
					console.log(respuesta);
					d.resolve();
				});

			return d.promise;
		},

		cargarCategorias: function(){
			var d = $q.defer();
			$http.get('http://localhost:8000/categorias')
				.success(function(data){
					self.categorias = data;
					return d.resolve();
				});

				return d.promise;
		}
	};
	return self;
}]);