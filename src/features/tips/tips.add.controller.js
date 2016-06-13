/**
 * courses.add.controller.js
 * by zindex
 */
// import vendors
import Simditor from 'simditor'

export default class TipsAddController {
  constructor($http, $state, authService) {
    this.tip = {}
    this.$http = $http
    this.$state = $state
    this.authService = authService
    const editor = new Simditor({
      textarea: document.querySelector("#body")
    });
  }
  vaildator() {
    if (
      this.tip.title &&
      this.tip.author &&
      this.tip.img_url &&
      this.tip.banner_url &&
      this.tip.body) {
      return true
    }
    return false
  }
  submit() {
    this.tip.body = document.querySelector("#body").value;
    if (!this.vaildator()) {
      return
    }
    this.$http({
      method: 'POST',
      url: '/api/v1.0/tips/',
      headers: {
        Authorization: 'Basic ' + this.authService.getToken(),
      },
      data: this.tip,
    }).then(() => {
      this.$state.go('tips.list')
    }, function errorCallback(response) {
      if (response.status !== 200) {
        console.log('服务器出问题了')
      }
    })
  }
}

TipsAddController.$inject = ['$http', '$state', 'authService']
