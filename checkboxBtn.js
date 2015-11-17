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
    }
  },
  methods: {
    handleClick: function handleClick() {
      var parent = this.$parent;
      var index = parent.value.indexOf(this.value);
      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
      this.checked = !this.checked;
    }
  },
  created: function created() {
    if (this.checked) this.$parent.value.push(this.value);
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<label class=\"btn\" v-class=\"active:checked,\n  btn-success:type == 'success',\n  btn-warning:type == 'warning',\n  btn-info:type == 'info',\n  btn-danger:type == 'danger',\n  btn-default:type == 'default',\n  btn-primary:type == 'primary',\n  \">\n\n    <input type=\"checkbox\" autocomplete=\"off\" checked=\"{{checked}}\" v-on=\"click:handleClick\">\n\n    <content></content>\n\n  </label>"
