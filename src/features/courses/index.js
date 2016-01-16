/**
 * index.js
 * the entry of course module
 *
 * by zindex
 */

// import css
// import './home.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'

// import deps
import routing from './courses.routes'
import CoursesController from './courses.controller'

/**
 * home module
 */
export default angular.module('app.courses', [angularUIRouter])
  .config(routing)
  .controller('CoursesController', CoursesController)
  .name
