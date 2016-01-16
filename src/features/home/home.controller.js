/**
 * home.controller.js
 * by zindex
 */
export default class HomeController {
  constructor($http) {
    this.$http = $http
    this.welcome = 'Hello, Worl'
    $http.get('foo.json').success((data) => {
      this.foo = data.foo
      console.log(this.foo)
    })
  }
}

HomeController.$inject = ['$http']
