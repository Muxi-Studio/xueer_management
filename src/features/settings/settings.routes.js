export default function routes($stateProvider) {
  $stateProvider
    .state('settings', {
      url: '/settings',
      template: require('./settings.html'),
      controller: 'SettingsController',
      controllerAs: 'settings',
    })
}

routes.$inject = ['$stateProvider']
