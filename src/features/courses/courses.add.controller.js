/**
 * courses.add.controller.js
 * by zindex
 */
export default class CoursesAddController {
  constructor($http, $location) {
    this.course = {}
    this.$http = $http
    this.$location = $location
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
    console.log(this.course)
    this.$http({
      method: 'POST',
      url: '/api/v1.0/courses/',
      headers: {
        Authorization: 'Basic eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ1NDMyNDE1NCwiaWF0IjoxNDU0MjM3NzU0fQ.eyJpZCI6NX0.tfED8JWoBhp2go1lkwGJGM6JliKV5xpusrfqnHQkv4g',
      },
      data: this.course,
    }).then((response) => {
      this.$location.path('/courses/list')
    }, function errorCallback(response) {
      if (response.status !== 200) {
        console.log('服务器出问题了')
      }
    })
  }
}

CoursesAddController.$inject = ['$http', '$location']
