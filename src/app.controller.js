/**
 * app.controller.js
 * by zindex
 */
export default class AppController {
  constructor($scope) {
    $scope.$watch(() => {
      return document.body.innerHTML
    }, (val) => {
      componentHandler.upgradeAllRegistered()
    })
  }
}

AppController.$inject = ['$scope']
