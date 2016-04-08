/**
 * courses.search.controller.js
 * by zindex
 */
export default class CoursesSearchController {
  constructor($http, $state, authService) {
    this.$http = $http
    this.$state = $state
    this.foo = "hello"
  }
}

CoursesSearchController.$inject = ['$http', '$state', 'authService']