/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesListController {
  constructor($http) {
    this.courses = []
    this.$http = $http
    $http.get('/api/v1.0/courses/').success((data) => {
      this.courses = data
    })
  }
}

CoursesListController.$inject = ['$http']
