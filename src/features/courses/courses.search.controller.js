/**
 * courses.controller.js
 * by zindex
 */
export default class CoursesSearchController {
  constructor($http, $state) {
    this.courses = [];
    this.$http = $http;
    this.$state = $state;
    this.hasNext = false;
    this.pid = this.$state.params.page || 1;
    }
  onSearchSubmit(){
      const re_blank = /^[\s\u3000]*$/ig;
      if (re_blank.test(this.keywords )||this.keywords===undefined) {
          return false;
        }
      else{
          this.url ='/api/v1.0/search/?keywords='+this.keywords+'&page=' + this.pid;
            // search url   /search/?<string:keywords>&<int:page>&<string:sort>&<int:main_cat>&<int:ts_cat>
          this.$http.get(this.url).then((response) => {
              this.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'));
              this.courses = response.data;
              this.$state.go('courses.list',{
                courses: this.courses,
                isSearch: true
              },{location: 'replace'});
            });
        }
    }
}

CoursesSearchController.$inject = ['$http', '$state'];
