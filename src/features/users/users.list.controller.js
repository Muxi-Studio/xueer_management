/**
 * users.controller.js
 * by zindex
 */
export default class UsersListController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    this.users = []
    this.roleId = '1'
    this.$http.get('/api/v1.0/users/?roleid=' + this.roleId).then((response) => {
      this.users = response.data
    })
  }
  onRoleIdChange() {
    this.$http.get('/api/v1.0/users/?roleid=' + this.roleId).then((response) => {
      this.users = response.data
    })
  }
  onDeleteClick(user) {
    this.$state.go('users.list.delete', {
      id: user.id,
      title: user.title,
      type: 'users',
    })
  }
}

UsersListController.$inject = ['$http', '$state']
