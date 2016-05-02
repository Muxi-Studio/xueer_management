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
      this.course.main_category = response.data.main_category
      this.course.sub_category = response.data.sub_category
      this.course.credit_category = response.data.credit_category
      this.defaultValue(this.course.main_category,this.course.sub_category,this.course.credit_category)
    })
  }
  defaultValue(main_category,sub_category,type_id){
    switch(main_category){
      case "公共课": this.course.category_id = '1'; break;
      case "通识课": this.course.category_id = '2';break;
      case "专业课": this.course.category_id = '3';break;
      case "素质课": this.course.category_id = '4';break;
    }
    switch(sub_category){
      case "通识核心课": this.course.sub_category_id = '1';break;
      case "通识选修课": this.course.sub_category_id = '2';break;
    }
    switch(type_id){
      case "理科": this.course.type_id = '1';break;
      case "文科": this.course.type_id = '2';break;
      case "艺体": this.course.type_id = '3';break;
      case "教育": this.course.type_id = '4';break;
    }
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
