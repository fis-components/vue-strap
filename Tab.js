var __vueify_style__ = require("vueify-insert-css").insert(".tab-content>.tab-pane[_v-1a3aafbf]{display:block}.tab-content>.tab-pane.hide[_v-1a3aafbf]{position:absolute}")
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    header: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      index: 0,
      show: false
    };
  },

  computed: {
    show: function show() {
      return this.$parent.activeIndex === this.index;
    },
    transition: function transition() {
      return this.$parent.effect;
    }
  },
  created: function created() {
    this.$parent.renderData.push({
      header: this.header,
      disabled: this.disabled
    });
  },
  ready: function ready() {
    this.index = [].concat((0, _toConsumableArray3.default)(this.$el.parentNode.children)).indexOf(this.$el);
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div role=\"tabpanel\" class=\"tab-pane\" v-class=\"hide:!show\" v-show=\"show\" v-transition=\"{{transition}}\" _v-1a3aafbf=\"\">\n    <content _v-1a3aafbf=\"\"></content>\n  </div>"
