/**
 * dialog.delete.controller.js
 * by zindex
 */

export default class DialogDeleteController {
  constructor($state, $window, $rootScope, $http) {
    this.$state = $state
    this.$window = $window
    this.$rootScope = $rootScope
    this.$http = $http
    this.title = this.$state.params.title
  }
  onDeleteConfirm() {
    const url = '/api/v1.0/courses/' + this.$state.params.cid + '/'
    this.$http({
      method: 'DELETE',
      url,
      headers: {
        Authorization: 'Basic eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ1NDQ4NTA1MSwiaWF0IjoxNDU0Mzk4NjUxfQ.eyJpZCI6NX0.TlPnW7qVSmJum90DFmiS2AS0vLOh3QDKmyZUm_iVNQY',
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

DialogDeleteController.$inject = ['$state', '$window', '$rootScope', '$http']
