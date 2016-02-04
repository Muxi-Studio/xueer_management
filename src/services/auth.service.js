import angular from 'angular'

class AuthService {
  constructor() {

  }
  getToken() {
    return document.getElementById('token').innerHTML
  }
}

export default angular.module('services.auth-service', [])
  .service('authService', AuthService)
  .name
