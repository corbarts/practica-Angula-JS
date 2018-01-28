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
    
    UserListController.$inject = [
        '$location',
        'usersService',
    ];
    
    function UserListController($location, usersService){
        var ctrl = this;
        ctrl.$onOption = onOption;
        ctrl.$viewUserDetails = viewApiUserDetails;
        ctrl.$onInit = onInit;
        
        function onOption(option){
            ctrl.orderBy = option;
        }
        
        function viewApiUserDetails(userId) {
            $location.path('/api/users/'+userId);
        }
        
        function onInit(){
            usersService.getApiUsers()
                .then(function (data){
                  ctrl.users = data;
            });
        }
    }
})(window.angular);