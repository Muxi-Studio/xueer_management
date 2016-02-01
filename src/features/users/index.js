/**
 * users.js
 * the entry of users module
 *
 * by zindex
 */

// import css
import './users.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'

// import deps
import routing from './users.routes'
import UsersListController from './users.list.controller'

/**
 * users module
 */
export default angular.module('app.users', [angularUIRouter])
  .config(routing)
  .controller('UsersListController', UsersListController)
  .name
