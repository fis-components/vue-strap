var __vueify_style__ = require("vueify-insert-css").insert(".datepicker{position:relative;display:inline-block}.datepicker-popup{position:absolute;border:1px solid #ccc;border-radius:5px;background:#fff;margin-top:2px;z-index:1;box-shadow:0 6px 12px rgba(0,0,0,.175)}.datepicker-inner{width:218px}.datepicker-body{padding:10px}.datepicker-body span,.datepicker-ctrl p,.datepicker-ctrl span{display:inline-block;width:28px;line-height:28px;height:28px;border-radius:4px}.datepicker-ctrl p{width:65%}.datepicker-ctrl span{position:absolute}.datepicker-body span{text-align:center}.datepicker-mouthRange span{width:48px;height:50px;line-height:45px}.datepicker-item-disable{background-color:#fff!important;cursor:not-allowed!important}.datepicker-item-disable,.datepicker-item-gray,.decadeRange span:first-child,.decadeRange span:last-child{color:#999}.datepicker-dateRange-item-active,.datepicker-dateRange-item-active:hover{background:#3276b1!important;color:#fff!important}.datepicker-mouthRange{margin-top:10px}.datepicker-ctrl p,.datepicker-ctrl span,.datepicker-dateRange span,.datepicker-mouthRange span{cursor:pointer}.datepicker-ctrl i:hover,.datepicker-ctrl p:hover,.datepicker-dateRange-item-hover,.datepicker-dateRange span:hover,.datepicker-mouthRange span:hover{background-color:#eee}.datepicker-weekRange span{font-weight:700}.datepicker-label{background-color:#f8f8f8;font-weight:700;padding:7px 0;text-align:center}.datepicker-ctrl{position:relative;height:30px;line-height:30px;font-weight:700;text-align:center}.month-btn{font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker-preBtn{left:2px}.datepicker-nextBtn{right:2px}")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventListener = require('./utils/EventListener.js');

var _EventListener2 = _interopRequireDefault(_EventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    value: {
      type: String,
      twoWay: true
    },
    format: {
      default: 'MMMM/dd/yyyy'
    },
    disabledDaysOfWeek: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    width: {
      type: String,
      default: '200px'
    }
  },
  data: function data() {
    return {
      weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      dateRange: [],
      decadeRange: [],
      currDate: new Date(),
      displayDayView: false,
      displayMouthView: false,
      displayYearView: false,
      mouthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
  },

  watch: {
    currDate: function currDate() {
      this.getDateRange();
    }
  },
  methods: {
    close: function close() {
      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
    },
    inputClick: function inputClick() {
      if (this.displayMouthView || this.displayYearView) {
        this.displayDayView = false;
      } else {
        this.displayDayView = !this.displayDayView;
      }
    },
    preNextDecadeClick: function preNextDecadeClick(flag) {
      var year = this.currDate.getFullYear();
      var mouths = this.currDate.getMonth();
      var date = this.currDate.getDate();

      if (flag === 0) {
        this.currDate = new Date(year - 10, mouths, date);
      } else {
        this.currDate = new Date(year + 10, mouths, date);
      }
    },
    preNextMonthClick: function preNextMonthClick(flag) {
      var year = this.currDate.getFullYear();
      var month = this.currDate.getMonth();
      var date = this.currDate.getDate();

      if (flag === 0) {
        var preMonth = this.getYearMonth(year, month - 1);
        this.currDate = new Date(preMonth.year, preMonth.month, date);
      } else {
        var nextMonth = this.getYearMonth(year, month + 1);
        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
      }
    },
    preNextYearClick: function preNextYearClick(flag) {
      var year = this.currDate.getFullYear();
      var mouths = this.currDate.getMonth();
      var date = this.currDate.getDate();

      if (flag === 0) {
        this.currDate = new Date(year - 1, mouths, date);
      } else {
        this.currDate = new Date(year + 1, mouths, date);
      }
    },
    yearSelect: function yearSelect(el, e) {
      e.stopPropagation();
      this.displayYearView = false;
      this.displayMouthView = true;
      this.currDate = new Date(el.$el.innerHTML, this.currDate.getMonth(), this.currDate.getDate());
    },
    daySelect: function daySelect(date, el) {
      if (el.$el.classList[0] === 'datepicker-item-disable') {
        return false;
      } else {
        this.currDate = date;
        this.value = this.stringify(this.currDate);
        this.displayDayView = false;
      }
    },
    switchMouthView: function switchMouthView() {
      this.displayDayView = false;
      this.displayMouthView = true;
    },
    switchDecadeView: function switchDecadeView() {
      this.displayMouthView = false;
      this.displayYearView = true;
    },
    mouthSelect: function mouthSelect(index) {
      this.displayMouthView = false;
      this.displayDayView = true;
      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
    },
    getYearMonth: function getYearMonth(year, month) {
      if (month > 11) {
        year++;
        month = 0;
      } else if (month < 0) {
        year--;
        month = 11;
      }
      return { year: year, month: month };
    },
    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
      var yearStr = date.getFullYear().toString();
      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
      return firstYearOfDecade + '-' + lastYearOfDecade;
    },
    stringifyDayHeader: function stringifyDayHeader(date) {
      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
    },
    parseMouth: function parseMouth(date) {
      return this.mouthNames[date.getMonth()];
    },
    stringifyYearHeader: function stringifyYearHeader(date) {
      return date.getFullYear();
    },
    stringify: function stringify(date) {
      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];

      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var mouthName = this.parseMouth(date);

      return format.replace(/yyyy/g, year).replace(/MMMM/g, mouthName).replace(/MMM/g, mouthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
    },
    parse: function parse(str) {
      var date = new Date(str);
      return isNaN(date.getFullYear()) ? null : date;
    },
    getDayCount: function getDayCount(year, month) {
      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (month === 1) {
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
          return 29;
        }
        return 28;
      }

      return dict[month];
    },
    getDateRange: function getDateRange() {
      var _this = this;

      this.dateRange = [];
      this.decadeRange = [];
      var time = {
        year: this.currDate.getFullYear(),
        month: this.currDate.getMonth(),
        day: this.currDate.getDate()
      };
      var yearStr = time.year.toString();
      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
      for (var i = 0; i < 12; i++) {
        this.decadeRange.push({
          text: firstYearOfDecade + i
        });
      }

      var currMonthFirstDay = new Date(time.year, time.month, 1);
      var firstDayWeek = currMonthFirstDay.getDay() + 1;
      if (firstDayWeek === 0) {
        firstDayWeek = 7;
      }
      var dayCount = this.getDayCount(time.year, time.month);
      if (firstDayWeek > 1) {
        var preMonth = this.getYearMonth(time.year, time.month - 1);
        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
        for (var i = 1; i < firstDayWeek; i++) {
          var dayText = prevMonthDayCount - firstDayWeek + i + 1;
          this.dateRange.push({
            text: dayText,
            date: new Date(preMonth.year, preMonth.month, dayText),
            sclass: 'datepicker-item-gray'
          });
        }
      }

      var _loop = function _loop(i) {
        var date = new Date(time.year, time.month, i);
        var week = date.getDay();
        var sclass = '';
        _this.disabledDaysOfWeek.forEach(function (el) {
          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
        });

        if (i === time.day) {
          if (_this.value) {
            var valueDate = _this.parse(_this.value);
            if (valueDate) {
              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                sclass = 'datepicker-dateRange-item-active';
              }
            }
          }
        }
        _this.dateRange.push({
          text: i,
          date: date,
          sclass: sclass
        });
      };

      for (var i = 1; i <= dayCount; i++) {
        _loop(i);
      }

      if (this.dateRange.length < 42) {
        var nextMonthNeed = 42 - this.dateRange.length;
        var nextMonth = this.getYearMonth(time.year, time.month + 1);

        for (var i = 1; i <= nextMonthNeed; i++) {
          this.dateRange.push({
            text: i,
            date: new Date(nextMonth.year, nextMonth.month, i),
            sclass: 'datepicker-item-gray'
          });
        }
      }
    }
  },
  ready: function ready() {
    var _this2 = this;

    this.$dispatch('child-created', this);
    this.currDate = this.parse(this.value) || this.parse(new Date());
    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
      if (!_this2.$el.contains(e.target)) _this2.close();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this._closeEvent) this._closeEvent.remove();
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" type=\"text\" v-style=\"width:width\" v-on=\"click:inputClick\" v-model=\"value\">\n      <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n          <div class=\"datepicker-inner\">\n              <div class=\"datepicker-body\">\n                  <div class=\"datepicker-ctrl\">\n                      <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextMonthClick(0)\">&lt;</span>\n                      <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextMonthClick(1)\">&gt;</span>\n                      <p v-on=\"click:switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"datepicker-weekRange\">\n                      <span v-repeat=\"w:weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"datepicker-dateRange\">\n                      <span v-repeat=\"d:dateRange\" v-class=\"d.sclass\" v-on=\"click:daySelect(d.date,this)\">{{d.text}}</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayMouthView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextYearClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextYearClick(1)\">&gt;</span>\n                    <p v-on=\"click:switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange\">\n                    <span v-repeat=\"m:mouthNames\" v-class=\"datepicker-dateRange-item-active:\n                    (this.mouthNames[this.parse(this.value).getMonth()]  === m) &amp;&amp;\n                    this.currDate.getFullYear() === this.parse(this.value).getFullYear()\" v-on=\"click:mouthSelect($index)\">\n                      {{m.substr(0,3)}}\n                    </span>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextDecadeClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange decadeRange\">\n                    <span v-repeat=\"decade:decadeRange\" v-class=\"datepicker-dateRange-item-active:\n                    this.parse(this.value).getFullYear() === decade.text\" v-on=\"click:yearSelect(this,$event)\">\n                      {{decade.text}}\n                    </span>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>"
