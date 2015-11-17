'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventListener = require('./utils/EventListener');

var _EventListener2 = _interopRequireDefault(_EventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    toggleDropdown: function toggleDropdown(e) {
      e.preventDefault();
      this.$el.classList.toggle('open');
    }
  },
  ready: function ready() {
    var el = this.$el;
    var toggle = el.querySelector('[data-toggle="dropdown"]');
    toggle.style.borderRadius = '4px';
    toggle.addEventListener('click', this.toggleDropdown);
    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
      if (!el.contains(e.target)) el.classList.remove('open');
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this._closeEvent) this._closeEvent.remove();
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"btn-group\">\n    <content select=\"[data-toggle='dropdown']\"></content>\n    <content select=\"ul.dropdown-menu\"></content>\n  </div>"
