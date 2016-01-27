/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesListController {
  constructor($http, $state) {
    this.deleteShow = false
    this.deleteDialogInfo = {}
    this.courses = []
    this.selected = []
    this.$http = $http
    this.$state = $state
    $http.get('/api/v1.0/courses/').then((response) => {
      this.courses = response.data
    })
  }
  onDelete(course) {
    this.deleteShow = true
    this.deleteId = course.id
    this.deleteDialogInfo.title = course.title
  }
  onDeleteConfirm() {
    const url = '/api/v1.0/courses/' + this.deleteId + '/'
    this.$http.delete(url).then(() => {
      this.$state.go(this.$state.current, {}, {
        reload: true,
      })
    })
  }
  onDeleteCancel() {
    this.deleteShow = false
  }
}

CoursesListController.$inject = ['$http', '$state']
