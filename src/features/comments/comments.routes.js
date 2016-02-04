export default function routes($stateProvider) {
  $stateProvider
    .state('comments', {
      url: '/comments',
      template: require('./comments.html'),
    })
    .state('comments.list', {
      url: '/list/:courseId',
      template: require('./comments.list.html'),
      controller: 'CommentsListController',
      controllerAs: 'commentsList',
    })
    .state('comments.list.delete', {
      url: '/delete/?id&title&type',
      template: require('../../components/dialog/dialog.html'),
      controller: 'DialogDeleteController',
      controllerAs: 'dialogDelete',
    })
}

routes.$inject = ['$stateProvider']
