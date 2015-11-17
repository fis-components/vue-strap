'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      index: 0,
      show: false
    };
  },

  computed: {
    show: function show() {
      return this.activeIndex === this.index;
    }
  },
  ready: function ready() {
    this.index = [].concat((0, _toConsumableArray3.default)(this.$el.parentNode.children)).indexOf(this.$el);
    this.$parent.indicator.push(this.index);
    if (this.index === 0) {
      this.$el.classList.add('active');
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"item\">\n    <content></content>\n  </div>"
