(function (angular) {
    'user strict';
    
    angular
        .module('app.users')
        .component('userList', userList());
    
    function userList() {
        var component = {
            templateUrl: '/app/api/users/userList/userList.component.html',
            controller: ApiUserListController,
        };
        
        return component;
    }
    
    ApiUserListController.$inject = [
        '$location',
        'usersService',
    ];
    
    function ApiUserListController ($location, usersService){
        var ctrl = this;
        ctrl.viewApiUserDetails = viewApiUserDetails;
        ctrl.$onInit = onInit;
        
        function viewApiUserDetails(userId) {
            $location.path('/Ausers/'+userId);
        }
        
        
        function onInit(){
            usersService.getApiUsers()
                .then(function (data){
                  ctrl.users = data;
            });
        }
      
    }
})(window.angular);