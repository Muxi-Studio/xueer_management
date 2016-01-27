/**
 * courses.update.controller.js
 * by zindex
 */
export default class CoursesUpdateController {
  constructor($http, $state) {
    this.url = '/api/v1.0/courses/' + $state.params.cid + '/'
    console.log($state.params.cid)
    this.course = {}
    this.$http = $http
    this.$http.get(this.url).then((response) => {
      console.log(response.data)
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
      method: 'PUT',
      url: this.url,
      headers: {
        Authorization: 'Basic eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ1MzgwNzQzOCwiaWF0IjoxNDUzNzIxMDM4fQ.eyJpZCI6Mn0.7W0-ucQ649EGzyFit9gFBN77NpqyKOj5rUJZrJKpGcI',
      },
      data: this.course,
    }).then(() => {
      this.$state.go(this.$state.list, {}, {
        reload: true,
      })
    }, function errorCallback(response) {
      if (response.status !== 200) {
        console.log('服务器出问题了')
      }
    })
  }
}

CoursesUpdateController.$inject = ['$http', '$state']
