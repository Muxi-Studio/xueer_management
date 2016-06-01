/**
 * courses.list.search.controller.js
 * by zindex
 */
import CoursesListParentController from './courses.list.parent.controller'

export default class CoursesListSearchController extends CoursesListParentController {
  constructor($http, $state, $stateParams) {
    super()
    this.deleteDialogInfo = {}
    this.courses = []
    this.$http = $http
    this.$state = $state
    this.hasNext = false
    this.keywords = this.$state.params.keywords || ''
    this.pid = this.$state.params.page || 1
    if (this.pid == 1) {
      this.hasPrev = false
    } else {
      this.hasPrev = true
    }
    $http.get('/api/v1.0/search/?keywords=' + this.keywords + '&page=' + this.pid).then((response) => {
      this.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'))
      this.courses = response.data
    })
  }
}

CoursesListSearchController.$inject = ['$http', '$state', '$stateParams']
