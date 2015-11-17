var __vueify_style__ = require("vueify-insert-css").insert(".fade-transition,.scale-transition{display:block}.scale-enter{-webkit-animation:a .15s ease-in;animation:a .15s ease-in}.scale-leave{-webkit-animation:b .15s ease-out;animation:b .15s ease-out}@-webkit-keyframes a{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes a{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes b{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes b{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popoverMixins = require('./popoverMixins.js');

var _popoverMixins2 = _interopRequireDefault(_popoverMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_popoverMixins2.default]
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<span v-el=\"trigger\">\n    <content>\n    </content>\n  </span>\n  <div class=\"popover\" v-class=\"\n    top:placement === 'top',\n    left:placement === 'left',\n    right:placement === 'right',\n    bottom:placement === 'bottom'\n    \" v-el=\"popover\" v-show=\"show\" v-transition=\"{{effect}}\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-show=\"header\">{{title}}</h3>\n      <div class=\"popover-content\">\n        {{{content}}}\n      </div>\n  </div>"
