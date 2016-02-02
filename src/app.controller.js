/**
 * app.controller.js
 * by zindex
 */
export default class AppController {
  constructor($scope, $rootScope) {
    this.$rootScope = $rootScope
    $scope.$watch(() => {
      return document.body.innerHTML
    }, () => {
      componentHandler.upgradeAllRegistered()
    })
    this.$rootScope.previousState = ''
    this.$rootScope.currentState = ''
    this.$rootScope.$on('$stateChangeSuccess', (ev, to, toParams, from, fromParams) => {
      this.$rootScope.previousState = from.name
      this.$rootScope.currentState = to.name
      this.$rootScope.fromParams = fromParams
    })
  }
}

AppController.$inject = ['$scope', '$rootScope']
