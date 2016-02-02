/**
 * users.controller.js
 * by zindex
 */
export default class UsersListController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    this.users = []
    $http.get('/api/v1.0/users/').then((response) => {
      this.users = response.data
    })
  }
}

UsersListController.$inject = ['$http', '$state']
