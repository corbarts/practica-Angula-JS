(function (angular) {
    'user strict';
    
    angular
        .module('app.users')
        .component('userDetail', userDetail());
    
    function userDetail() {
        var component = {
            templateUrl: '/app/users/userDetail/userDetail.component.html',
            controller: ApiUserDetailController,
        };
        
        return component;
    }
    
    ApiUserDetailController.$inject = [
        '$routeParams',
        'usersService',
    ];
    
    function ApiUserDetailController($routeParams, usersService){
        var ctrl = this;
        ctrl.$onInit = onInit;
        
        function onInit(){
            usersService.getApiUser($routeParams.userId)
                .then(function (data){
                  ctrl.user = data;
            });
        }
    }
})(window.angular);