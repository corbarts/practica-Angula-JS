(function (angular) {
    'user strict';
    
    angular
        .module('app.users')
        .component('userList', userList());
    
    function userList() {
        var component = {
            templateUrl: '/app/users/userList/userList.component.html',
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
        ctrl.createUser = createUser;
        ctrl.$onInit = onInit;
        
        function viewApiUserDetails(userId) {
            $location.path('/users/'+userId);
        }
        
        function createUser() {
            $location.path('/users/create');
        }
        
        function onInit(){
            usersService.getApiUsers()
                .then(function (response){
                  ctrl.users = response.data;
            });
        }
      
    }
})(window.angular);