(function (angular) {
    'user strict';
    
    angular
        .module('app.users')
        .factory('usersService', usersService);
    
    usersService.$inject = [
        '$http'
    ];
    
    function usersService($http) {
        var urlRoot = 'https://reqres.in//';
        
        var service = {
            getApiUser: getApiUser,
            getApiUsers: getApiUsers,
        };
        return service;
        
        function getApiUser(userId) {
            return $http.get(urlRoot + 'api/users/' +userId)
                .then(complete)
                .catch(failed);
        }
        
        function getApiUsers() {
            return $http.get(urlRoot + 'api/users/')
                .then(complete)
                .catch(failed);
        }
        
        function complete (response) {
            return response.data;
        }
        
        function failed(error) {
            console.error(error.data);
        }
        
    }
})(window.angular);