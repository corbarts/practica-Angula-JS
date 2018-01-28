(function (angular) {
    'user strict';
    
    angular
        .module('app.users')
        .component('user', user());
    
    function user() {
        var component = {
            templateUrl: '/app/api/users/user/user.component.html',
            controller: UserController,
            bindings: {
                user: '<',
            }
        };
        
        return component;
    }
    
    function UserController(){}
})(window.angular);