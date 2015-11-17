var __vueify_style__ = require("vueify-insert-css").insert(".btn-group .dropdown-menu .notify{position:absolute;bottom:5px;width:96%;margin:0 2%;min-height:26px;padding:3px 5px;background:#f5f5f5;border:1px solid #e3e3e3;box-shadow:inset 0 1px 1px rgba(0,0,0,.05);pointer-events:none;opacity:.9}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: {
      twoWay: true,
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: 'Nothing Selected'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1024
    }
  },
  data: function data() {
    return {
      show: false,
      showNotify: false
    };
  },

  computed: {
    showPlaceholder: function showPlaceholder() {
      return this.value.length <= 0;
    }
  },
  watch: {
    value: function value(val) {
      var _this = this;

      var timeout = undefined;
      if (timeout) clearTimeout(timeout);
      if (val.length > this.limit) {
        this.showNotify = true;
        this.value.pop();
        timeout = setTimeout(function () {
          return _this.showNotify = false;
        }, 1000);
      }
    }
  },
  methods: {
    toggleDropdown: function toggleDropdown() {
      this.show = !this.show;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"btn-group\" v-class=\"open:show\">\n    <button v-el=\"btn\" type=\"button\" class=\"btn btn-default dropdown-toggle\" v-on=\"click:toggleDropdown,blur:this.show = false\">\n          <span class=\"placeholder\" v-show=\"showPlaceholder\">\n            {{placeholder}}\n          </span>\n          <span class=\"content\">\n            {{value.join(', ')}}\n          </span>\n          <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <content></content>\n      <div class=\"notify\" v-show=\"showNotify\" v-transition=\"fadein\">Limit reached ({{limit}} items max).</div>\n    </ul>\n  </div>"
