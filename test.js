'use strict';

require('mocha');
var assert = require('assert');
var isWindows = require('./');
var isMac = require('./').isMac;
var isLinux = require('./').isLinux;

describe('isWindows', function () {
  it('should return true if the platform is windows:', function () {
    if (process && process.platform === 'win32') {
      assert.equal(isWindows(), true);
    } else {
      assert.equal(isWindows(), false);
    }
  });
});

describe('isMac', function () {
  it('should return true if the platform is darwin:', function () {
    if (process && process.platform === 'darwin') {
      assert.equal(isMac(), true);
    } else {
      assert.equal(isMac(), false);
    }
  });
});

describe('isLinux', function () {
  it('should return true if the platform is linux:', function () {
    if (process && process.platform === 'linux') {
      assert.equal(isMac(), true);
    } else {
      assert.equal(isMac(), false);
    }
  });
});
