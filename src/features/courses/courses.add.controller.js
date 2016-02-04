/**
 * courses.add.controller.js
 * by zindex
 */
export default class CoursesAddController {
  constructor($http, $state, authService) {
    this.course = {}
    this.$http = $http
    this.$state = $state
    this.authService = authService
  }
  vaildator() {
    if (
      this.course.name &&
      this.course.teacher &&
      this.course.category_id) {
      return true
    }
    return false
  }
  parseData() {
    this.course.category_id = parseInt(this.course.category_id)
  }
  submit() {
    if (!this.vaildator()) {
      return
    }
    this.parseData()
    this.$http({
      method: 'POST',
      url: '/api/v1.0/courses/',
      headers: {
        Authorization: 'Basic ' + this.authService.getToken(),
      },
      data: this.course,
    }).then(() => {
      this.$state.go('courses.list')
    }, function errorCallback(response) {
      if (response.status !== 200) {
        console.log('服务器出问题了')
      }
    })
  }
}

CoursesAddController.$inject = ['$http', '$state', 'authService']
