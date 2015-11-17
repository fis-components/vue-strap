"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    type: function type() {
      return this.$parent.type;
    },
    active: function active() {
      return this.$parent.value === this.value;
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.$parent.value = this.value;
    }
  },
  created: function created() {
    if (this.checked) this.$parent.value = this.value;
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<label class=\"btn\" v-class=\"active:active,\n  btn-success:type == 'success',\n  btn-warning:type == 'warning',\n  btn-info:type == 'info',\n  btn-danger:type == 'danger',\n  btn-default:type == 'default',\n  btn-primary:type == 'primary',\n  \">\n\n    <input type=\"radio\" autocomplete=\"off\" checked=\"{{checked}}\" v-on=\"click:handleClick\">\n\n    <content></content>\n\n  </label>"
