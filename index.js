/*! is-windows v1.0.0 | MIT LICENSE (c) 20177 | https://github.com/mr47/platform-is */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWindows = isWindows;
exports.isMac = isMac;
exports.isLinux = isLinux;
function isWindows() {
  if (typeof process === 'undefined' || !process) {
    return false;
  }
  return process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';
}
function isMac() {
  if (typeof process === 'undefined' || !process) {
    return false;
  }
  return process.platform === 'darwin';
}
function isLinux() {
  if (typeof process === 'undefined' || !process) {
    return false;
  }
  return process.platform === 'linux';
}

exports.default = isWindows;
