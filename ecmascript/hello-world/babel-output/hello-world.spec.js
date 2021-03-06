'use strict';

var _helloWorld = require('./hello-world');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Hello World', function () {
  var helloWorld = new _helloWorld2.default();

  it('says hello world with no name', function () {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });

  xit('says hello to bob', function () {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  xit('says hello to sally', function () {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});