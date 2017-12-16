export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/admin/')
}

routing.$inject = ['$urlRouterProvider', '$locationProvider']
