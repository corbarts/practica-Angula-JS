(function (angular) {
    'user strict';
    
    angular
        .module('app.users')
        .component('user', user());
    
    function user() {
        var component = {
            templateUrl: '/app/users/user/user.component.html',
            controller: ApiUserController,
            bindings: {
                user: '<',
            }
        };
        
        return component;
    }
    
    function ApiUserController(){}
})(window.angular);