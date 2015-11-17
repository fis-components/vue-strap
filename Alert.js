var __vueify_style__ = require("vueify-insert-css").insert(".fade-transition{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.fade-enter,.fade-leave{opacity:0}.alert.top{margin:0 auto;left:0;right:0}.alert.top,.alert.top-right{position:fixed;top:30px;z-index:1}.alert.top-right{right:50px}")
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    type: {
      type: String
    },
    dismissable: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true,
      twoWay: true
    },
    duration: {
      type: Number,
      default: 0
    },
    width: {
      type: String
    },
    placement: {
      type: String
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;

      if (this._timeout) clearTimeout(this._timeout);
      if (val && !!this.duration) {
        this._timeout = setTimeout(function () {
          return _this.show = false;
        }, this.duration);
      }
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div v-show=\"show\" class=\"alert\" v-class=\"\n      alert-success:type == 'success',\n      alert-warning:type == 'warning',\n      alert-info:type == 'info',\n      alert-danger:type == 'danger',\n      top: placement === 'top',\n      top-right: placement === 'top-right'\n    \" v-transition=\"fade\" v-style=\"width:width\" role=\"alert\">\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\" v-on=\"click:show = false\">\n      <span>×</span>\n    </button>\n    <content>\n    </content>\n  </div>"
