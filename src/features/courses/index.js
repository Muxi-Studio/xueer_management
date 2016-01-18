/**
 * index.js
 * the entry of course module
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

/**
 * home module
 */
export default angular.module('app.courses', [angularUIRouter])
  .config(routing)
  .controller('CoursesListController', CoursesListController)
  .controller('CoursesAddController', CoursesAddController)
  .name
