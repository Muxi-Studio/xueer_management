/**
 * courses.update.controller.js
 * by zindex
 */
export default class CoursesUpdateController {
  constructor($state) {
    console.log($state.params.cid)
  }
}

CoursesUpdateController.$inject = ['$state']