var __vueify_style__ = require("vueify-insert-css").insert(".accordion-toggle{cursor:pointer}.collapse-transition{-webkit-transition:max-height .5s ease;transition:max-height .5s ease;overflow:hidden}.collapse-enter,.collapse-leave{max-height:0!important}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    header: {
      type: String
    }
  },
  data: function data() {
    return {
      height: 0
    };
  },

  methods: {
    toggleIsOpen: function toggleIsOpen() {
      this.isOpen = !this.isOpen;
      this.$dispatch('isOpenEvent', this);
    }
  },
  ready: function ready() {
    var panel = this.$$.panel;
    panel.style.display = 'block';
    this.height = panel.offsetHeight;
    panel.style.maxHeight = this.height + 'px';
    if (!this.isOpen) panel.style.display = 'none';
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\" v-on=\"click:toggleIsOpen(this)\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\" v-el=\"panel\" v-show=\"isOpen\" v-transition=\"collapse\">\n      <div class=\"panel-body\">\n        <content></content>\n      </div>\n    </div>\n  </div>"
