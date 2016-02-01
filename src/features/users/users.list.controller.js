/**
 * users.controller.js
 * by zindex
 */
export default class UsersListController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }
}

UsersListController.$inject = ['$http', '$state']
