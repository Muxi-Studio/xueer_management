/**
 * courses.update.controller.js
 * by zindex
 */
// import vendors
import Simditor from 'simditor'

export default class TipsUpdateController {
  constructor($http, $state, authService) {
    this.tip = {}
    this.$http = $http
    this.$state = $state
    this.authService = authService
    this.editor = new Simditor({
      textarea: document.querySelector('#body'),
    })
    $http({
      method: 'GET',
      url: '/api/v1.0/tips/' + $state.params.cid + '/',
    }).then((res) => {
      this.tip = res.data
      this.editor.setValue(this.tip.body)
    })
  }
  vaildator() {
    if (
      this.tip.title &&
      this.tip.author &&
      this.tip.img_url &&
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
      method: 'PUT',
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

TipsUpdateController.$inject = ['$http', '$state', 'authService']