/**
 * home.controller.js
 * by zindex
 */
export default class HomeController {
  constructor($http) {
    this.$http = $http
    this.welcome = '主页！！'
  }
}

HomeController.$inject = ['$http']
