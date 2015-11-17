var __vueify_style__ = require("vueify-insert-css").insert(".aside-open{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.aside-open.has-push-right{-webkit-transform:translateX(-300px);-ms-transform:translateX(-300px);transform:translateX(-300px)}.aside{position:fixed;top:0;bottom:0;z-index:2;overflow:auto;background:#fff}.aside.left{left:0;right:auto}.aside.right{left:auto;right:0}.slideleft-enter{-webkit-animation:a .3s;animation:a .3s}.slideleft-leave{-webkit-animation:b .3s;animation:b .3s}@-webkit-keyframes a{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes a{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes b{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}@keyframes b{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}.slideright-enter{-webkit-animation:c .3s;animation:c .3s}.slideright-leave{-webkit-animation:d .3s;animation:d .3s}@-webkit-keyframes c{0%{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes c{0%{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes d{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}}@keyframes d{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}}.aside:focus{outline:0}@media (max-width:991px){.aside{min-width:240px}}.aside.left{right:auto;left:0}.aside.right{right:0;left:auto}.aside .aside-dialog .aside-header{border-bottom:1px solid #e5e5e5;min-height:16.43px;padding:6px 15px;background:#337ab7;color:#fff}.aside .aside-dialog .aside-header .close{margin-right:-8px;padding:4px 8px;color:#fff;font-size:25px;opacity:.8}.aside .aside-dialog .aside-body{position:relative;padding:15px}.aside .aside-dialog .aside-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.aside .aside-dialog .aside-footer .btn+.btn{margin-left:5px;margin-bottom:0}.aside .aside-dialog .aside-footer .btn-group .btn+.btn{margin-left:-1px}.aside .aside-dialog .aside-footer .btn-block+.btn-block{margin-left:0}.aside-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;background-color:#000}.aside-backdrop.in{opacity:.5;filter:alpha(opacity=50)}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventListener = require('./utils/EventListener.js');

var _EventListener2 = _interopRequireDefault(_EventListener);

var _getScrollBarWidth = require('./utils/getScrollBarWidth.js');

var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    show: {
      type: Boolean,
      require: true,
      twoWay: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    header: {
      type: String
    },
    width: {
      type: Number,
      default: '320'
    }
  },
  watch: {
    show: function show(val) {
      var backdrop = document.createElement('div');
      var body = document.body;
      backdrop.className = 'aside-backdrop';
      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
      if (val) {
        body.appendChild(backdrop);
        body.classList.add('modal-open');
        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px';
        }
        // request property that requires layout to force a layout
        var x = backdrop.clientHeight;
        backdrop.className += ' in';
        this._clickEvent = _EventListener2.default.listen(backdrop, 'click', this.close);
      } else {
        if (this._clickEvent) this._clickEvent.remove();
        backdrop = document.querySelector('.aside-backdrop');
        backdrop.className = 'aside-backdrop';
        setTimeout(function () {
          body.classList.remove('modal-open');
          body.style.paddingRight = '0';
          body.removeChild(backdrop);
        }, 300);
      }
    }
  },
  methods: {
    close: function close() {
      this.show = false;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"aside\" v-style=\"width:width + 'px'\" v-class=\"\n    left:placement === 'left',\n    right:placement === 'right'\n    \" v-show=\"show\" v-transition=\"{{this.placement === 'left' ? 'slideleft' : 'slideright'}}\">\n    <div class=\"aside-dialog\">\n      <div class=\"aside-content\">\n        <div class=\"aside-header\">\n          <button type=\"button\" class=\"close\" v-on=\"click:close\"><span>×</span></button>\n          <h4 class=\"aside-title\">{{header}}</h4>\n        </div>\n        <div class=\"aside-body\">\n          <content></content>\n        </div>\n      </div>\n    </div>\n  </div>"
