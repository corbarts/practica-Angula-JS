(function (angular) {
  'use strict';

  angular
    .module('app.users')
    .component('userCreate', userCreate());

  function userCreate() {
    var component = {
      templateUrl: 'app/users/userCreate/userCreate.component.html',
      controller: UserCreateController,
    };
    return component;
  }

  UserCreateController.$inject = [
    '$location',
    'usersService'
  ];

  function UserCreateController($location, usersService) {
    var ctrl = this;
    ctrl.submit = submit;
    //ctrl.$onInit = onInit;

    function submit(user) {
      usersService.postUser(user)
        .then(completed);
        
      function completed(response) {
        var url = '/users/';
        alert("Usuario "+response.first_name+" creado el "+response.createdAt);
        $location.path(url);
      }
    }
  }
})(window.angular);