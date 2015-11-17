var __vueify_style__ = require("vueify-insert-css").insert(".vue-affix{position:fixed}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventListener = require('./utils/EventListener.js');

var _EventListener2 = _interopRequireDefault(_EventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    offset: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      affixed: false,
      styles: {}
    };
  },

  methods: {
    scrolling: function scrolling() {
      var scrollTop = this.getScroll(window, true);
      var elementOffset = this.getOffset(this.$el);
      if (!this.affixed && scrollTop > elementOffset.top) {
        this.affixed = true;
        this.styles = {
          top: this.offset + 'px',
          left: elementOffset.left + 'px',
          width: this.$el.offsetWidth + 'px'
        };
      }
      if (this.affixed && scrollTop < elementOffset.top) {
        this.affixed = false;
        this.styles = {};
      }
    },

    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
    getScroll: function getScroll(w, top) {
      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
      var method = 'scroll' + (top ? 'Top' : 'Left');
      if (typeof ret !== 'number') {
        var d = w.document;
        // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
          // quirks mode
          ret = d.body[method];
        }
      }
      return ret;
    },
    getOffset: function getOffset(element) {
      var rect = element.getBoundingClientRect();
      var body = document.body;
      var clientTop = element.clientTop || body.clientTop || 0;
      var clientLeft = element.clientLeft || body.clientLeft || 0;
      var scrollTop = this.getScroll(window, true);
      var scrollLeft = this.getScroll(window);
      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
      };
    }
  },
  ready: function ready() {
    this._scrollEvent = _EventListener2.default.listen(window, 'scroll', this.scrolling);
    this._resizeEvent = _EventListener2.default.listen(window, 'resize', this.scrolling);
  },
  beforeDestroy: function beforeDestroy() {
    if (this._scrollEvent) {
      this._scrollEvent.remove();
    }
    if (this._resizeEvent) {
      this._resizeEvent.remove();
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div>\n<div v-class=\"vue-affix:affixed\" v-style=\"styles\">\n  <content></content>\n</div>\n</div>"
