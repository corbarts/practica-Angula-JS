(function (angular) {
    'user strict';
    
    angular
        .module('app')
        .config(config);
    
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
              template: '<b>Para la practica de Angular JS se va a usar la apiRest publica <a href="https://reqres.in/"/><br>'
        })
            .when('/users', {
              template: '<user-list></user-list>'
        })
                    .when('/users/create', {
                template: '<user-create></user-create>'
        })     
            .when('/users/:userId', {
              template: '<user-detail></user-detail>'
        })
   
        .otherwise('/');
        
    //para activar el modo de uso de HTML5 hay que poner esto.    
    $locationProvider.html5Mode(true);
    }
})(window.angular);