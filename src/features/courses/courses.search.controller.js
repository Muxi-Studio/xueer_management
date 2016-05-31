/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesSearchController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    this.loading = false
    this.message = ''
  }
  onSearchSubmit() {
    this.message = ''
    const reBlank = /^[\s\u3000]*$/ig
    if (reBlank.test(this.keywords) || this.keywords === undefined) {
      return false
    }
    this.loading = true
    this.url = '/api/v1.0/search/?keywords=' + this.keywords + '&page=1'
    this.$http.get(this.url).then((response) => {
      this.$state.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'))
      this.loading = false
      if (response.data.length > 0) {
        this.$state.cusData = response.data
        this.$state.go('courses.searchResult', {})
      } else {
        this.keywords = ''
        this.message = '无结果'
      }
    })
  }
}

CoursesSearchController.$inject = ['$http', '$state']
