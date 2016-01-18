/**
 * courses.add.controller.js
 * by zindex
 */
export default class CoursesAddController {
  constructor($http) {
    this.course = {}
    this.$http = $http
  }
  submit() {
    console.log(this.course)
    this.$http({
      method: 'POST',
      url: '/api/v1.0/courses/',
      headers: {
        Authorization: 'Basic ZXlKaGJHY2lPaUpJVXpJMU5pSXNJbVY0Y0NJNk1UUTFNekU0TnpZNE9Dd2lhV0YwSWpveE5EVXpNVEF4TWpnNGZRLmV5SnBaQ0k2TVgwLjFhcndaUzN5aFJ4VVZWc1VNS3duYmNJZWJFODhrYjl1c19vVnNGajFZbDQ6',
      },
      data: this.course,
    }).then(function successCallback(response) {
      console.log(response)
    }, function errorCallback(response) {
      console.log(response)
    })
  }
}

CoursesAddController.$inject = ['$http']
