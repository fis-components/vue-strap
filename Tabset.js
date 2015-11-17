var __vueify_style__ = require("vueify-insert-css").insert(".nav-tabs[_v-536b8043]{margin-bottom:15px}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    effect: {
      type: String,
      default: 'fadein'
    }
  },
  data: function data() {
    return {
      renderData: [],
      activeIndex: 0
    };
  },

  components: {
    'tablist': {
      inherit: true,
      template: '<li v-on="click:handleTablistClick($event,$index,this)"\n        v-class="active:$index === activeIndex,\n        disabled:disabled === true">\n        <a href="#">\n        {{{header}}}\n        </a></li>',
      methods: {
        handleTablistClick: function handleTablistClick(e, index, el) {
          e.preventDefault();
          if (!el.disabled) this.activeIndex = index;
        }
      }
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div _v-536b8043=\"\">\n    <!-- Nav tabs -->\n     <ul class=\"nav nav-tabs\" role=\"tablist\" _v-536b8043=\"\">\n       <tablist v-repeat=\"renderData\" _v-536b8043=\"\"></tablist>\n     </ul>\n\n     <!-- Tab panes -->\n     <div class=\"tab-content\" v-el=\"tabContent\" _v-536b8043=\"\">\n       <content _v-536b8043=\"\"></content>\n     </div>\n\n  </div>"
