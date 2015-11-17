'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    oneAtATime: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    var _this = this;

    this.$on('isOpenEvent', function (child) {
      if (_this.oneAtATime) {
        _this.$children.forEach(function (item) {
          if (child !== item) {
            item.isOpen = false;
          }
        });
      }
    });
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"panel-group\">\n  <content></content>\n</div>"
