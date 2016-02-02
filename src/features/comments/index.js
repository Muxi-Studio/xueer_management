/**
 * comments.js
 * the entry of users module
 *
 * by zindex
 */

// import css
import './comments.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'

// import deps
import routing from './comments.routes'
import CommentsListController from './comments.list.controller'

/**
 * users module
 */
export default angular.module('app.comments', [angularUIRouter])
  .config(routing)
  .controller('CommentsListController', CommentsListController)
  .name
