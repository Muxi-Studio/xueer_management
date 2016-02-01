/**
 * index.js
 * the entry of courses module
 *
 * by zindex
 */

// import css
import './courses.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'

// import deps
import routing from './courses.routes'
import CoursesListController from './courses.list.controller'
import CoursesAddController from './courses.add.controller'
import CoursesUpdateController from './courses.update.controller'

/**
 * courses module
 */
export default angular.module('app.courses', [angularUIRouter])
  .config(routing)
  .controller('CoursesListController', CoursesListController)
  .controller('CoursesAddController', CoursesAddController)
  .controller('CoursesUpdateController', CoursesUpdateController)
  .name
