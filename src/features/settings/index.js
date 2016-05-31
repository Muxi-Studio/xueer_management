/**
 * index.js
 * the entry of settings module
 *
 * by zindex
 */

// import css
import './settings.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'

// import deps
import routing from './settings.routes'
import SettingsController from './settings.controller'

/**
 * settings module
 */
export default angular.module('app.settings', [angularUIRouter])
  .config(routing)
  .controller('SettingsController', SettingsController)
  .name
