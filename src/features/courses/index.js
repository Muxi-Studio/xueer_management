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
import CoursesListSearchController from './courses.list.search.controller'
import CoursesAddController from './courses.add.controller'
import CoursesUpdateController from './courses.update.controller'
import CoursesSearchController from './courses.search.controller'
import DialogDeleteController from '../../components/dialog/dialog.delete.controller'

/**
 * courses module
 */
export default angular.module('app.courses', [angularUIRouter])
  .config(routing)
  .controller('CoursesListController', CoursesListController)
  .controller('CoursesAddController', CoursesAddController)
  .controller('CoursesUpdateController', CoursesUpdateController)
  .controller('CoursesSearchController', CoursesSearchController)
  .controller('DialogDeleteController', DialogDeleteController)
  .controller('CoursesListSearchController', CoursesListSearchController)
  .name
