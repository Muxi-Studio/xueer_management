/**
 * courses.list.controller.js
 * by zindex
 */
import CoursesListParentController from './courses.list.parent.controller'

export default class CoursesListController extends CoursesListParentController {
  constructor($http, $state, $stateParams) {
    super()
    this.deleteDialogInfo = {}
    this.courses = []
    this.$http = $http
    this.$state = $state
    this.hasNext = false
    this.pid = this.$state.params.page || 1
    if (this.pid == 1) {
      this.hasPrev = false
    } else {
      this.hasPrev = true
    }
    if ($state.cusData) {
      this.courses = $state.cusData
      this.hasNext = $state.hasNext
      $state.hasNext = false
      $state.cusData = null
    } else {
      $http.get('/api/v1.0/courses/?page=' + this.pid).then((response) => {
        this.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'))
        this.courses = response.data
      })
    }
  }
}

CoursesListController.$inject = ['$http', '$state', '$stateParams']
