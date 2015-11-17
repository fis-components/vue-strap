'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventListener = require('./utils/EventListener.js');

var _EventListener2 = _interopRequireDefault(_EventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverMixin = {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'fadein'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    header: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String
    }
  },
  data: function data() {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true
    };
  },

  methods: {
    toggle: function toggle() {
      this.show = !this.show;
    }
  },
  ready: function ready() {
    var _this = this;

    var popover = this.$$.popover;
    var triger = this.$$.trigger.children[0];
    if (this.trigger === 'hover') {
      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
        return _this.show = true;
      });
      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
        return _this.show = false;
      });
    } else if (this.trigger === 'focus') {
      this._focusEvent = _EventListener2.default.listen(triger, 'focus', function () {
        return _this.show = true;
      });
      this._blurEvent = _EventListener2.default.listen(triger, 'blur', function () {
        return _this.show = false;
      });
    } else {
      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
    }

    switch (this.placement) {
      case 'top':
        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
        this.position.top = triger.offsetTop - popover.offsetHeight;
        break;
      case 'left':
        this.position.left = triger.offsetLeft - popover.offsetWidth;
        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
        break;
      case 'right':
        this.position.left = triger.offsetLeft + triger.offsetWidth;
        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
        break;
      case 'bottom':
        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
        this.position.top = triger.offsetTop + triger.offsetHeight;
        break;
      default:
        console.log('Wrong placement prop');
    }
    popover.style.top = this.position.top + 'px';
    popover.style.left = this.position.left + 'px';
    popover.style.display = 'none';
    this.show = !this.show;
  },
  beforeDestroy: function beforeDestroy() {
    if (this._blurEvent) {
      this._blurEvent.remove();
      this._focusEvent.remove();
    }
    if (this._mouseenterEvent) {
      this._mouseenterEvent.remove();
      this._mouseleaveEvent.remove();
    }
    if (this._clickEvent) this._clickEvent.remove();
  }
};

exports.default = PopoverMixin;