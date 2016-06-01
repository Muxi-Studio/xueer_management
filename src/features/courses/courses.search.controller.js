/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesSearchController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    this.loading = false
  }
  onSearchSubmit() {
    const reBlank = /^[\s\u3000]*$/ig
    if (reBlank.test(this.keywords) || this.keywords === undefined) {
      return false
    }
    this.loading = true
    this.$state.go('courses.searchResult', {
      keywords: this.keywords,
    })
  }
}

CoursesSearchController.$inject = ['$http', '$state']
