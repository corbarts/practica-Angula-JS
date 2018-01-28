(function (angular) {
    'user strict';
    
    angular
        .module('app')
        .config(config);
    
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
              template: '<b>Para la practica de Angular JS se va a usar la apiRest publiblica <a href="https://reqres.in/"/><br>'
                        'Se va a usar una petición GET para repurar información de usuarios'
        })
            .when('/api/users', {
              template: '<user-list></user-list>'
        })
            .when('/api/users/:userId', {
              template: '<user-detail></user-detail>'
        })
        .otherwise('/');
        
    //para activar el modo de uso de HTML5 hay que poner esto.    
    $locationProvider.html5Mode(true);
    }
})(window.angular);