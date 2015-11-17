var __vueify_style__ = require("vueify-insert-css").insert(".tooltip{opacity:.9}.fadein-enter{-webkit-animation:a .3s ease-in;animation:a .3s ease-in}.fadein-leave{-webkit-animation:b .3s ease-out;animation:b .3s ease-out}@-webkit-keyframes a{0%{opacity:0}to{opacity:1}}@keyframes a{0%{opacity:0}to{opacity:1}}@-webkit-keyframes b{0%{opacity:1}to{opacity:0}}@keyframes b{0%{opacity:1}to{opacity:0}}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popoverMixins = require('./popoverMixins.js');

var _popoverMixins2 = _interopRequireDefault(_popoverMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_popoverMixins2.default],
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    effect: {
      type: String,
      default: 'scale'
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<span v-el=\"trigger\">\n    <content>\n    </content>\n  </span>\n  <div class=\"tooltip\" v-class=\"\n    top:placement === 'top',\n    left:placement === 'left',\n    right:placement === 'right',\n    bottom:placement === 'bottom'\n    \" v-el=\"popover\" v-show=\"show\" v-transition=\"{{effect}}\" role=\"tooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>"
