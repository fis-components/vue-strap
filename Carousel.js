var __vueify_style__ = require("vueify-insert-css").insert(".carousel-control[_v-5bb4fb76]{cursor:pointer}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _EventListener = require('./utils/EventListener.js');

var _EventListener2 = _interopRequireDefault(_EventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  components: {
    'indicator': {
      inherit: true,
      template: '<li v-repeat="indicator" v-on="click:handleIndicatorClick($index)" v-class="active:$index === activeIndex"</li>',
      methods: {
        handleIndicatorClick: function handleIndicatorClick(index) {
          if (this.isAnimating) return false;
          this.isAnimating = true;
          this.activeIndex = index;
        }
      }
    }
  },
  data: function data() {
    return {
      indicator: [],
      activeIndex: 0,
      isAnimating: false
    };
  },

  computed: {
    slider: function slider() {
      return this.$el.querySelectorAll('.item');
    }
  },
  watch: {
    activeIndex: function activeIndex(newVal, oldVal) {
      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal);
    }
  },
  methods: {
    slide: function slide(direction, selected, prev) {
      var _this = this;

      if (this._prevSelectedEvent) this._prevSelectedEvent.remove();
      if (this._selectedEvent) this._selectedEvent.remove();

      var prevSelectedEl = this.slider[prev];
      var selectedEl = this.slider[selected];
      var transitionendFn = function transitionendFn() {
        [].concat((0, _toConsumableArray3.default)(_this.slider)).forEach(function (el) {
          return el.className = 'item';
        });
        selectedEl.classList.add('active');
        _this.isAnimating = false;
      };

      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev');
      // request property that requires layout to force a layout
      var x = selectedEl.clientHeight;
      this._prevSelectedEvent = _EventListener2.default.listen(prevSelectedEl, 'transitionend', transitionendFn);
      this._selectedEvent = _EventListener2.default.listen(selectedEl, 'transitionend', transitionendFn);
      prevSelectedEl.classList.add(direction);
      selectedEl.classList.add(direction);
    },
    nextClick: function nextClick() {
      if (this.isAnimating) return false;
      this.isAnimating = true;
      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0;
    },
    prevClick: function prevClick() {
      if (this.isAnimating) return false;
      this.isAnimating = true;
      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1;
    }
  },
  ready: function ready() {
    var _this2 = this;

    var intervalID = null;
    var el = this.$el;
    function intervalManager(flag, func, time) {
      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID);
    }
    if (!!this.interval) {
      intervalManager(true, this.nextClick, this.interval);
      el.addEventListener('mouseenter', function () {
        return intervalManager(false);
      });
      el.addEventListener('mouseleave', function () {
        return intervalManager(true, _this2.nextClick, _this2.interval);
      });
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-5bb4fb76=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-5bb4fb76=\"\">\n    <indicator _v-5bb4fb76=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-5bb4fb76=\"\">\n    <content _v-5bb4fb76=\"\">\n    </content>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" v-on=\"click:prevClick\" _v-5bb4fb76=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-5bb4fb76=\"\"></span>\n    <span class=\"sr-only\" _v-5bb4fb76=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" v-on=\"click:nextClick\" _v-5bb4fb76=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-5bb4fb76=\"\"></span>\n    <span class=\"sr-only\" _v-5bb4fb76=\"\">Next</span>\n  </a>\n</div>"
