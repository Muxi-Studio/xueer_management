/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesListController {
  constructor($http) {
    this.courses = []
    this.selected = []
    this.$http = $http
    $http.get('/api/v1.0/courses/').success((data) => {
      this.courses = data
    })
  }
	onDelete() {
		console.log('delete!!')
	}
}

CoursesListController.$inject = ['$http']
