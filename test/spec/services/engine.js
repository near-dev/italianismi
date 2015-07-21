'use strict';

describe('Service: engine', function () {

  // load the service's module
  beforeEach(module('italianismiApp'));

  // instantiate service
  var engine;
  beforeEach(inject(function (_engine_) {
    engine = _engine_;
  }));

  it('should do something', function () {
    expect(!!engine).toBe(true);
  });

});
