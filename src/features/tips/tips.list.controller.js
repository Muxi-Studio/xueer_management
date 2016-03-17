/**
 * tips.list.controller.js
 * by zindex
 */
export default class TipsListController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    $http.get('/api/v1.0/tips').then((response) => {
      this.tips = response.data
    })
  }
  onDeleteClick(tip) {
    this.$state.go('tips.list.delete', {
      id: tip.id,
      title: tip.title,
      type: 'tip',
    })
  }
}

TipsListController.$inject = ['$http', '$state']
