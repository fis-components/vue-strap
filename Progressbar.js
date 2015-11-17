"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    now: {
      type: Number,
      require: true
    },
    label: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"progress-bar\" role=\"progressbar\" v-class=\"\n    progress-bar-success:type == 'success',\n    progress-bar-warning:type == 'warning',\n    progress-bar-info:type == 'info',\n    progress-bar-danger:type == 'danger',\n    progress-bar-striped:striped,\n    active:animated\n    \" v-style=\"width:now + '%'\">\n    {{label ? now + '%':'' }}\n  </div>"
