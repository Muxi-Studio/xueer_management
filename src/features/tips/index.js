/**
 * index.js
 * the entry of tips module
 *
 * by zindex
 */

// import css
import './tips.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'

// import deps
import routing from './tips.routes'
import TipsListController from './tips.list.controller'
import TipsAddController from './tips.add.controller'
import TipsUpdateController from './tips.update.controller'

/**
 * courses module
 */
export default angular.module('app.tips', [angularUIRouter])
  .config(routing)
  .controller('TipsListController', TipsListController)
  .controller('TipsAddController', TipsAddController)
  .controller('TipsUpdateController', TipsUpdateController)
  .name
