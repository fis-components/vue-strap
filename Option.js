var __vueify_style__ = require("vueify-insert-css").insert("a span.check-mark{position:absolute;display:inline-block;right:15px;margin-top:5px}")
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: {
      type: String
    }
  },
  data: function data() {
    return {
      chosen: false
    };
  },

  computed: {
    chosen: function chosen() {
      return this.$parent.value.indexOf(this.value) !== -1 ? true : false;
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      e.preventDefault();
      var parent = this.$parent;
      var index = parent.value.indexOf(this.value);
      if (parent.multiple) {
        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
      } else {
        parent.value = [];
        parent.value.push(this.value);
        parent.show = false;
      }
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<li style=\"position:relative\">\n    <a v-on=\"mousedown:handleClick\" style=\"cursor:pointer\">\n      <content></content>\n      <content select=\"span.text\">\n        {{value}}\n      </content>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\"></span>\n    </a>\n  </li>"
