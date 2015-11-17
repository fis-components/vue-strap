'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: {
      type: String,
      twoWay: true
    },
    type: {
      type: String,
      default: 'default'
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <content></content>\n  </div>"
