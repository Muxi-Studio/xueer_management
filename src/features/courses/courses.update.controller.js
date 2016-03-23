/**
 * courses.update.controller.js
 * by zindex
 */
export default class CoursesUpdateController {
  constructor($http, $state,authService) {
    this.url = '/api/v1.0/courses/' + $state.params.cid + '/'
    this.course = {}
    this.$http = $http
    this.$state = $state
    this.authService = authService
    this.$http.get(this.url).then((response) => {
      this.course.name = response.data.title
      this.course.teacher = response.data.teacher
    })
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
  submit() {
    if (!this.vaildator()) {
      return
    }
    this.$http({
      method: 'PUT',
      url: this.url,
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

CoursesUpdateController.$inject = ['$http', '$state','authService']
