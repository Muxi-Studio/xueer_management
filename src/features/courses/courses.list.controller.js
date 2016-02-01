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
    this.$http({
      method: 'DELETE',
      url,
      headers: {
        Authorization: 'Basic eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ1NDMyNDE1NCwiaWF0IjoxNDU0MjM3NzU0fQ.eyJpZCI6NX0.tfED8JWoBhp2go1lkwGJGM6JliKV5xpusrfqnHQkv4g',
      },
    }).then(() => {
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
