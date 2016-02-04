/**
 * dialog.delete.controller.js
 * by zindex
 */

export default class DialogDeleteController {
  constructor($state, $window, $rootScope, $http, authService) {
    this.$state = $state
    this.$window = $window
    this.$rootScope = $rootScope
    this.$http = $http
    this.authService = authService
    this.title = this.$state.params.title || this.$state.params.id
  }
  onDeleteConfirm() {
    const url = '/api/v1.0/' + this.$state.params.type + '/' + this.$state.params.id + '/'
    this.$http({
      method: 'DELETE',
      url,
      headers: {
        Authorization: 'Basic ' + this.authService.getToken(),
      },
    }).then(() => {
      console.log(this.$rootScope.previousState)
      this.$state.go(this.$rootScope.previousState, this.$rootScope.fromParams, {
        reload: true,
      })
    })
  }
  onDeleteCancel() {
    this.$window.history.back()
  }
}

DialogDeleteController.$inject = ['$state', '$window', '$rootScope', '$http', 'authService']
