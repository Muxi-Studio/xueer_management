import angular from 'angular'

function convertToNumber() {
  return {
    require: 'ngModel',
    link: (scope, element, attrs, ngModel) => {
      ngModel.$parsers.push((val) => {
        return parseInt(val, 10)
      })
      ngModel.$formatters.push((val) => {
        return '' + val
      })
    },
  }
}

export default angular.module('directives.convertToNumber', [])
  .directive('convertToNumber', convertToNumber)
  .name
