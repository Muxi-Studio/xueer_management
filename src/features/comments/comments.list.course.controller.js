/**
 * comments.list.course.controller.js
 */

import CommentsListController from './comments.list.controller'

export default class CommentsListCourseController extends CommentsListController {
  constructor($http, $state) {
    super()
    this.$http = $http
    this.$state = $state
    this.comments = []
    this.hasNext = false
    this.pid = this.$state.params.page || 1
    if (this.pid == 1) {
      this.hasPrev = false
    } else {
      this.hasPrev = true
    }
    $http.get('/api/v1.0/courses/' + $state.params.courseId + '/comments/?page=' + this.pid)
      .then((response) => {
        this.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'))
        this.comments = response.data
      })
  }
}


CommentsListCourseController.$inject = ['$http', '$state']
