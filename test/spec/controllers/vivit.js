'use strict';

describe('Controller: VivitCtrl', function () {

  // load the controller's module
  beforeEach(module('italianismiApp'));

  var VivitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VivitCtrl = $controller('VivitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
