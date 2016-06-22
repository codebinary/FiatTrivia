var app = angular.module('fiatTrivia', [
			'ngRoute', 'jcs-autoValidate',

			'fiatTrivia.configuracion',
			'fiatTrivia.categorias',
			'fiatTrivia.categoriasCtrl',
			'fiatTrivia.dashboardCtrl'
			]);


/*==================================================================
=            Codigo para la traduccion de la validación            =
==================================================================*/
angular.module('jcs-autoValidate')
.run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // To change the root resource file path
        defaultErrorMessageResolver.setI18nFileRootPath('angular/lib/');
        defaultErrorMessageResolver.setCulture('es-co');
    }
]);


app.controller('mainCtrl', ['$scope', 'Configuracion', function($scope, Configuracion){
	$scope.config = {}

	$scope.titulo = "";
	$scope.subtitulo = "";
	
	Configuracion.cargar().then(function(){
		$scope.config = Configuracion.config;
	});

	/*===============================
	= FUNCIONES GLOBALES            =
	===============================*/
	$scope.activar = function(menu, submenu, titulo, subtitulo){
		$scope.titulo 		= titulo;
		$scope.subtitulo 	= subtitulo;

		//Quitamos las clases
		$scope.mDashboard 	= "";
		$scope.mCategorias 	= "";

		$scope[menu] = 'active';
	};

}]);


/*================================================
=            Enrutamiento para la app            =
================================================*/
app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'dashboard/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/categorias', {
			templateUrl: 'categorias/categorias.html',
			controller: 'categoriasCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

}]);

/*===============================
=            FILTROS            =
===============================*/
app.filter('quitarLetra', function(){
	return function(palabra){
		if(palabra){
			if(palabra.length > 1)
				return palabra.substr(1);
			else
				return palabra;
		}
	}
})

