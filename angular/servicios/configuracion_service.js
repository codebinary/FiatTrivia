var app = angular.module('fiatTrivia.configuracion', []);

app.factory('Configuracion', ['$http', '$q', function($http, $q){

	var self = {
		config: {},
		cargar: function(){
			var d = $q.defer();
			$http.get('configuracion.json')
				.success(function(data){
					self.config = data;
					d.resolve();
				})
				.error(function(){
					d.reject();
					console.error("No se pudo cargar el archivo");
				})

			return d.promise;
		}
	};
	return self;
}]);