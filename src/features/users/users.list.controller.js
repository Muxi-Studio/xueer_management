/**
 * users.controller.js
 * by zindex
 */
export default class UsersListController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    this.users = []
    this.roleId = '3'
    this.$http.get('/api/v1.0/users/?roleid=' + this.roleId).then((response) => {
      this.users = response.data
    })
  }
  onRoleIdChange() {
    this.$http.get('/api/v1.0/users/?roleid=' + this.roleId).then((response) => {
      this.users = response.data
    })
  }
}

UsersListController.$inject = ['$http', '$state']