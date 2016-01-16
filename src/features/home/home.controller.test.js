import home from './index'

describe('Controller: Home', () => {
  let $controller
  let $httpBackend
  let ctrl

  beforeEach(angular.mock.module(home))

  beforeEach(angular.mock.inject((_$controller_, _$httpBackend_) => {
    $controller = _$controller_
    $httpBackend = _$httpBackend_
    $httpBackend.expectGET('foo.json')
      .respond({
        foo: 1,
      })
    ctrl = $controller('HomeController')
  }))

  it('foo should be 1', () => {
    expect(ctrl.foo).toBeUndefined()
    $httpBackend.flush()
    expect(ctrl.foo).toBe(1)
  })
})
