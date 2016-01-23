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
    console.log(this.course)
    if (
      this.course.name &&
      this.course.teacher &&
      this.course.category_id) {
      return true
    }
    return false
  }
  parseData(){
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
        Authorization: 'Basic ZXlKaGJHY2lPaUpJVXpJMU5pSXNJbVY0Y0NJNk1UUTFNell5TURVeU1Td2lhV0YwSWpveE5EVXpOVE0wTVRJeGZRLmV5SnBaQ0k2TW4wLnp1S0k5ZFdoOUFhNkFIMFJKLTloXzAtUTVZWlU3SkE4bmcweC1nVTJ0T2c6',
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
