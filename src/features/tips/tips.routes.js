export default function routes($stateProvider) {
  $stateProvider
    .state('tips', {
      url: '/tips',
      template: require('./tips.html'),
    })
    .state('tips.list', {
      url: '/list',
      template: require('./tips.list.html'),
      controller: 'TipsListController',
      controllerAs: 'tipsList',
    })
    .state('tips.add', {
      url: '/add',
      template: require('./tips.add.html'),
      controller: 'TipsAddController',
      controllerAs: 'tipsAdd',
    })
    .state('tips.list.delete', {
      url: '/delete/?id&title&type',
      template: require('../../components/dialog/dialog.html'),
      controller: 'DialogDeleteController',
      controllerAs: 'dialogDelete',
    })
}

routes.$inject = ['$stateProvider']