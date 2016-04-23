/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesListController {
  constructor($http, $state,$stateParams) {
    this.deleteDialogInfo = {}
    this.courses = []
    this.$http = $http
    this.$state = $state
    this.searchCourses = $stateParams.courses
    this.isSearch = $stateParams.isSearch
    this.hasNext = false
    this.pid = this.$state.params.page || 1
    if (this.isSearch) {
      this.courses = this.searchCourses
      $stateParams.isSearch = false
    }else{
      $http.get('/api/v1.0/courses/?page=' + this.pid).then((response) => {
        this.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'));
        this.courses = response.data;
      });
    }
  }
  onDeleteClick(course) {
    this.$state.go('courses.list.delete', {
      id: course.id,
      title: course.title,
      type: 'courses',
    })
  }
  onCommentClick(cid) {
    this.$state.go('comments.list', {
      courseId: cid,
    })
  }
  onNextClick() {
    if (!this.$state.params.page) {
      this.$state.go(this.$state.current, {
        page: 2,
      })
    } else {
      this.$state.go(this.$state.current, {
        page: this.$state.params.page + 1,
      })
    }
  }
}

CoursesListController.$inject = ['$http', '$state','$stateParams']
