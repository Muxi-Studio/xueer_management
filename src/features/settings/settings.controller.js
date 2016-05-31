/**
 * settings.controller.js
 * by zindex
 */
export default class SettingsController {
  constructor($http, $state, authService) {
    this.$http = $http
    this.$state = $state
    this.indexing = false
    this.authService = authService
  }
  onIndexBtnClick() {
    if (this.indexing) return
    this.indexing = true
    this.$http({
      method: 'POST',
      url: '/api/v1.0/memcached/',
      headers: {
        Authorization: 'Basic ' + this.authService.getToken(),
      },
    }).then(function() {
      this.indexing = false
      console.log('done!')
    })
  }
}

SettingsController.$inject = ['$http', '$state', 'authService']
