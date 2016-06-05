/**
 * comments.list.all.controller.js
 */

import CommentsListController from './comments.list.controller'

export default class CommentsListAllController extends CommentsListController {
  constructor($http, $state, authService) {
    super()
    this.$http = $http
    this.$state = $state
    this.authService = authService
    this.comments = []
    this.hasNext = false
    this.pid = this.$state.params.page || 1
    if (this.pid == 1) {
      this.hasPrev = false
    } else {
      this.hasPrev = true
    }
    $http({
      method: 'GET',
      url: '/api/v1.0/comments/?page=' + this.pid,
      headers: {
        Authorization: 'Basic ' + this.authService.getToken(),
      },
    })
      .then((response) => {
        this.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'))
        this.comments = response.data
      })
  }
}

CommentsListAllController.$inject = ['$http', '$state', 'authService']
