var __vueify_style__ = require("vueify-insert-css").insert(".dropdown-menu>li>a{cursor:pointer}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _callAjax = require('./utils/callAjax.js');

var _callAjax2 = _interopRequireDefault(_callAjax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeahead = {
  created: function created() {
    this.items = this.primitiveData;
  },

  components: {
    list: {
      inherit: true,
      template: '',
      created: function created() {
        this.$options.template = '<li v-repeat="items" v-class="active: isActive($index)"><a v-on="mousedown:hit,mousemove: setActive($index)">' + this.template + '</a></li>';
      }
    }
  },
  props: {
    data: {
      type: Array
    },
    limit: {
      type: Number,
      default: 8
    },
    async: {
      type: String
    },
    template: {
      default: '<span v-html="$value | highlight query"></span>'
    },
    key: {
      type: String
    },
    matchCase: {
      type: Boolean,
      default: false
    },
    onHit: {
      type: Function,
      default: function _default(items) {
        this.reset();
        this.query = items;
      }
    },
    placeholder: {
      type: String
    }
  },
  data: function data() {
    return {
      query: '',
      showDropdown: false,
      noResults: true,
      current: 0,
      items: []
    };
  },

  computed: {
    primitiveData: function primitiveData() {
      var _this = this;

      if (this.data) {
        return this.data.filter(function (value) {
          value = _this.matchCase ? value : value.toLowerCase();
          return value.indexOf(_this.query) !== -1;
        }).slice(0, this.limit);
      }
    }
  },
  methods: {
    update: function update() {
      var _this2 = this;

      if (!this.query) {
        this.reset();
        return false;
      }
      if (this.data) {
        this.items = this.primitiveData;
        this.showDropdown = this.items.length ? true : false;
      }
      if (this.async) {
        (0, _callAjax2.default)(this.async + this.query, function (data) {
          _this2.items = data[_this2.key].slice(0, _this2.limit);
          _this2.showDropdown = _this2.items.length ? true : false;
        });
      }
    },
    reset: function reset() {
      this.items = [];
      this.query = '';
      this.loading = false;
      this.showDropdown = false;
    },
    setActive: function setActive(index) {
      this.current = index;
    },
    isActive: function isActive(index) {
      return this.current === index;
    },
    hit: function hit(e) {
      e.preventDefault();
      this.onHit(this.items[this.current], e.targetVM);
    },
    up: function up() {
      if (this.current > 0) this.current--;
    },
    down: function down() {
      if (this.current < this.items.length - 1) this.current++;
    }
  },
  filters: {
    highlight: function highlight(value, phrase) {
      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
    }
  }
};
exports.default = typeahead;
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div style=\"position: relative\" v-class=\"open:showDropdown\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"{{placeholder}}\" autocomplete=\"off\" v-model=\"query\" v-on=\"\n  input: update,\n  keydown: up|key 'up',\n  keydown: down | key 'down',\n  keydown: hit|key 'enter',\n  keydown: reset|key 'esc',\n  blur:showDropdown = false\n  \">\n  <ul class=\"dropdown-menu\" v-el=\"dropdown\">\n  <list></list>\n  </ul>\n</div>"
