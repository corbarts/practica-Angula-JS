(function (angular) {
    'user strict';
    
    angular
        .module('app.users')
        .component('userDetail', userDetail());
    
    function userDetail() {
        var component = {
            templateUrl: '/app/users/userDetail/userDetail.component.html',
            controller: UserDetailController,
        };
        
        return component;
    }
    
    UserDetailController.$inject = [
        '$routeParams',
        'usersService',
    ];
    
    function UserDetailController($routeParams, usersService){
        var ctrl = this;
        ctrl.$onInit = onInit;
        
        function onInit(){
            usersService.getApiUser($routeParams.userId)
                .then(function (response){
                  ctrl.user = response.data;
            });
        }
    }
})(window.angular);