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
      this.course.credit &&
      this.course.category_id &&
      this.course.type_id &&
      this.course.introduction) {
      return true
    }
    return false
  }
  submit() {
    if (!this.vaildator()) {
      return
    }
    this.$http({
      method: 'POST',
      url: '/api/v1.0/courses/',
      headers: {
        Authorization: 'Basic ZXlKaGJHY2lPaUpJVXpJMU5pSXNJbVY0Y0NJNk1UUTFNekkxTkRJM055d2lhV0YwSWpveE5EVXpNVFkzT0RjM2ZRLmV5SnBaQ0k2TVgwLko5QVVGZDllcWJhc2xXMFlaUUNUTV9ZY0pEeWJkdWFSb0hRblpPeEVhblE6',
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
