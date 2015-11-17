var __vueify_style__ = require("vueify-insert-css").insert(".modal{-webkit-transition:all .3s ease;transition:all .3s ease}.modal.in{background-color:rgba(0,0,0,.5)}.modal.zoom .modal-dialog{-webkit-transform:scale(.1);-moz-transform:scale(.1);-ms-transform:scale(.1);transform:scale(.1);top:300px;opacity:0;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.modal.zoom.in .modal-dialog{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform:translate3d(0,-300px,0);transform:translate3d(0,-300px,0);opacity:1}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getScrollBarWidth = require('./utils/getScrollBarWidth.js');

var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);

var _EventListener = require('./utils/EventListener.js');

var _EventListener2 = _interopRequireDefault(_EventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      require: true,
      type: Boolean,
      twoWay: true
    },
    width: {
      type: Number,
      default: 600
    },
    callback: {
      type: Function,
      default: function _default() {}
    },
    effect: {
      type: String,
      default: 'fade'
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;

      var el = this.$el;
      var body = document.body;
      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
      if (val) {
        el.querySelector('.modal-content').focus();
        el.style.display = 'block';
        setTimeout(function () {
          return el.classList.add('in');
        }, 0);
        body.classList.add('modal-open');
        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px';
        }
        this._blurModalContentEvent = _EventListener2.default.listen(this.$el, 'click', function (e) {
          if (e.target === el) _this.show = false;
        });
      } else {
        if (this._blurModalContentEvent) this._blurModalContentEvent.remove();
        el.classList.remove('in');
        setTimeout(function () {
          el.style.display = 'none';
          body.classList.remove('modal-open');
          body.style.paddingRight = '0';
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
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"modal fade\" role=\"dialog\" v-class=\"\n    fade:effect === 'fade',\n    zoom:effect === 'zoom'\">\n    <div class=\"modal-dialog\" role=\"document\" v-style=\"width: width + 'px'\n      \">\n      <div class=\"modal-content\">\n        <content select=\".modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" v-on=\"click:close\"><span>×</span></button>\n            <h4 class=\"modal-title\">{{title}}</h4>\n          </div>\n        </content>\n        <content select=\".modal-body\">\n          <div class=\"modal-body\"></div>\n        </content>\n        <content select=\".modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" v-on=\"click:close\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" v-on=\"click:callback\">Save changes</button>\n          </div>\n        </content>\n      </div>\n    </div>\n  </div>"
