/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesListController {
  constructor($http, $state) {
    this.deleteDialogInfo = {}
    this.courses = []
    this.$http = $http
    this.$state = $state
    $http.get('/api/v1.0/courses/').then((response) => {
      this.courses = response.data
    })
  }
  onDeleteClick(course) {
    this.$state.go('courses.list.delete', {
      cid: course.id,
      title: course.title,
    })
  }
  onCommentClick(cid) {
    this.$state.go('comments.list', {
      courseId: cid,
    })
  }
}

CoursesListController.$inject = ['$http', '$state']
