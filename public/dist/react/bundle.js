webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddEmp = function (_React$Component) {
    _inherits(AddEmp, _React$Component);

    function AddEmp(props) {
        _classCallCheck(this, AddEmp);

        return _possibleConstructorReturn(this, (AddEmp.__proto__ || Object.getPrototypeOf(AddEmp)).call(this, props));
    }

    _createClass(AddEmp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "span",
                    null,
                    "addEmp\u6A21\u5757"
                )
            );
        }
    }]);

    return AddEmp;
}(_react2.default.Component);

exports.default = AddEmp;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emp = function (_React$Component) {
    _inherits(Emp, _React$Component);

    function Emp(props) {
        _classCallCheck(this, Emp);

        return _possibleConstructorReturn(this, (Emp.__proto__ || Object.getPrototypeOf(Emp)).call(this, props));
    }

    _createClass(Emp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "emp" },
                _react2.default.createElement(
                    "ul",
                    { className: "emp-nav" },
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/info/emp/addEmp" },
                            "\u65B0\u589E\u5458\u5DE5"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/info/emp/getEmp" },
                            "\u5458\u5DE5\u5217\u8868"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Emp;
}(_react2.default.Component);

exports.default = Emp;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

var _list = __webpack_require__(142);

var _list2 = _interopRequireDefault(_list);

var _pagination = __webpack_require__(143);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetEmp = function (_React$Component) {
	_inherits(GetEmp, _React$Component);

	function GetEmp(props) {
		_classCallCheck(this, GetEmp);

		var _this = _possibleConstructorReturn(this, (GetEmp.__proto__ || Object.getPrototypeOf(GetEmp)).call(this, props));

		_this.state = {
			curPage: 1,
			eachPage: 10,
			sumPage: 0,
			maxPage: 0,
			listData: []
		};
		return _this;
	}

	_createClass(GetEmp, [{
		key: "componentWillMount",

		//在render之前执行componentWillMount的内容
		value: function componentWillMount() {
			this.getEmpByPage();
		}
	}, {
		key: "getEmpByPage",
		value: function getEmpByPage() {
			var _this2 = this;

			_axios2.default.get('/emp/getEmpByPage', {
				params: {
					curPage: this.state.curPage,
					eachPage: this.state.eachPage
				}
			}).then(function (response) {
				return response.data;
			}).then(function (data) {
				//返回列表数据
				//注意，这里可以将state的键写为和返回的数据data一样，这样直接setState(data)直接解构配对
				_this2.setState({
					sumPage: data.count,
					curPage: data.curPage,
					eachPage: data.eachPage,
					maxPage: data.maxPage,
					listData: data.data
				});
			}).catch(function (error) {
				console.log(error);
			});
		}
	}, {
		key: "delById",
		value: function delById(_id) {
			_axios2.default.get('/emp/delById', {
				params: {
					_id: _id
				}
			}).then(function (response) {
				return response.data;
			}).then(function (data) {
				//返回是否删除成功
				if (eval(data)) {
					getEmpByPage();
				}
			}).catch(function (error) {
				console.log(error);
			});
		}
	}, {
		key: "setCurPage",
		value: function setCurPage(curPage) {
			this.state.curPage = curPage;
			this.getEmpByPage();
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					"\u5458\u5DE5\u4FE1\u606F\u5217\u8868"
				),
				_react2.default.createElement(_list2.default, { delFn: function delFn(_id) {
						return _this3.delById(_id);
					}, listData: this.state.listData }),
				_react2.default.createElement(_pagination2.default, _extends({
					setCurPage: function setCurPage(curPage) {
						return _this3.setCurPage(curPage);
					}
				}, this.state))
			);
		}
	}]);

	return GetEmp;
}(_react2.default.Component);

exports.default = GetEmp;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//使用axios取代ajax（不用引入jquery了,axios较轻量化,基于promise实现）


var info = function (_React$Component) {
	_inherits(info, _React$Component);

	function info(props) {
		_classCallCheck(this, info);

		return _possibleConstructorReturn(this, (info.__proto__ || Object.getPrototypeOf(info)).call(this, props));
	}

	_createClass(info, [{
		key: "render",
		value: function render() {
			//这里是info父组件，使用this.props.children加载子组件以在同一页面显示（this.props.children由主容器中Route父子组件的嵌套关系决定）
			//使用Link组件（由react-router获取），并添加to属性（值为相应的路径），会将组件渲染为a标签，点击后会加载相应的this.props.children
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"ul",
					{ className: "infoUl" },
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "info/emp" },
							"\u5458\u5DE5\u7BA1\u7406"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "info/student" },
							"\u5B66\u751F\u7BA1\u7406"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "info/teache" },
							"\u6559\u5E08\u7BA1\u7406"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "info/system" },
							"\u7CFB\u7EDF\u7BA1\u7406"
						)
					)
				),
				this.props.children
			);
		}
	}]);

	return info;
}(_react2.default.Component);

exports.default = info;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Student = function (_React$Component) {
    _inherits(Student, _React$Component);

    function Student(props) {
        _classCallCheck(this, Student);

        return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, props));
    }

    _createClass(Student, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "span",
                    null,
                    "student\u6A21\u5757"
                )
            );
        }
    }]);

    return Student;
}(_react2.default.Component);

exports.default = Student;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//使用axios取代ajax（不用引入jquery了,axios较轻量化，基于promise实现）


var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            username: "maxim",
            password: "123456"
        };
        return _this;
    }

    _createClass(Login, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h4",
                    null,
                    "\u767B\u5F55\u6A21\u5757"
                ),
                _react2.default.createElement(
                    "span",
                    null,
                    "\uFF08\u6CE8\u610F\u8F93\u5165\u6570\u636E\u5E93\u5DF2\u6709\u7684\u7528\u6237\u540D\u53CA\u5BC6\u7801\uFF0C\u6216\u8005\u70B9\u51FB\u6CE8\u518C\u8FDB\u884C\u6CE8\u518C\uFF09"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "\u8D26\u6237\uFF1A",
                    _react2.default.createElement("input", { type: "text", ref: "username", defaultValue: this.state.username })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "\u5BC6\u7801\uFF1A",
                    _react2.default.createElement("input", { type: "text", ref: "password", defaultValue: this.state.password })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("input", { type: "button", value: "\u767B\u5F55", onClick: function onClick() {
                            return _this2.loginFn();
                        } }),
                    " ",
                    " ",
                    _react2.default.createElement("input", { type: "button", value: "\u6CE8\u518C", onClick: function onClick() {
                            return _this2.regFn();
                        } })
                )
            );
        }
    }, {
        key: "loginFn",
        value: function loginFn() {
            _axios2.default.get('/users/login', {
                params: {
                    username: this.refs.username.value,
                    password: this.refs.password.value
                }
            }).then(function (response) {
                return response.data;
            }).then(function (data) {
                console.log(data);
                if (data) {
                    _reactRouter.hashHistory.push("/info");
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: "regFn",
        value: function regFn() {
            _reactRouter.hashHistory.push("/reg");
        }
    }]);

    return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reg = function (_React$Component) {
    _inherits(Reg, _React$Component);

    function Reg(props) {
        _classCallCheck(this, Reg);

        var _this = _possibleConstructorReturn(this, (Reg.__proto__ || Object.getPrototypeOf(Reg)).call(this, props));

        _this.state = {
            isUse: false,
            regSuccess: false
        };
        return _this;
    }

    _createClass(Reg, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h4",
                    null,
                    "\u6CE8\u518C\u6A21\u5757"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "\u8D26\u6237\uFF1A",
                    _react2.default.createElement("input", { type: "text", ref: "username", placeholder: "\u8BF7\u8F93\u5165\u8D26\u6237\u68C0\u6D4B\u662F\u5426\u88AB\u4F7F\u7528", onBlur: function onBlur() {
                            _this2.isUse();
                        } }),
                    this.state.isUse ? "该用户名已被使用" : ""
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "\u5BC6\u7801\uFF1A",
                    _react2.default.createElement("input", { type: "text", ref: "password", placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801" }),
                    this.state.regSuccess ? "注册成功" : ""
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("input", { type: "button", value: "\u767B\u5F55", onClick: function onClick() {
                            return _this2.loginFn();
                        } }),
                    " ",
                    " ",
                    _react2.default.createElement("input", { type: "button", value: "\u6CE8\u518C", onClick: function onClick() {
                            return _this2.regFn();
                        }, disabled: this.state.isUse })
                )
            );
        }
    }, {
        key: "loginFn",

        //测试push与path的配合使用，在地址栏中传入账户输入框的值
        value: function loginFn() {
            _reactRouter.hashHistory.push("/login/" + this.refs.username.value);
        }
    }, {
        key: "regFn",
        value: function regFn() {
            var _this3 = this;

            _axios2.default.get('/users/reg', {
                params: {
                    username: this.refs.username.value,
                    password: this.refs.password.value
                }
            }).then(function (response) {
                //此处再将data传送给下一个then
                return response.data;
            }).then(function (data) {
                if (data) {
                    _this3.setState({ regSuccess: data });
                }
            })
            //如果出错打印错误信息
            .catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: "isUse",
        value: function isUse() {
            var _this4 = this;

            _axios2.default.get('/users/isUse', {
                params: {
                    username: this.refs.username.value
                }
            }).then(function (response) {
                return response.data;
            }).then(function (data) {
                _this4.setState({ isUse: data });
            })
            //如果出错打印错误信息
            .catch(function (error) {
                console.log(error);
            });
        }
    }]);

    return Reg;
}(_react2.default.Component);

exports.default = Reg;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _AddTodo = __webpack_require__(144);

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _Node_list = __webpack_require__(146);

var _Node_list2 = _interopRequireDefault(_Node_list);

var _Filter = __webpack_require__(145);

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var todoList = function (_React$Component) {
    _inherits(todoList, _React$Component);

    function todoList(props) {
        _classCallCheck(this, todoList);

        //初始化state，等同于getInitialState方法
        var _this = _possibleConstructorReturn(this, (todoList.__proto__ || Object.getPrototypeOf(todoList)).call(this, props));

        _this.state = {
            listData: [{
                content: "备忘1",
                done: false
            }, {
                content: "备忘2",
                done: true
            }, {
                content: "备忘3",
                done: true
            }, {
                content: "备忘4",
                done: false
            }],
            showType: "all"
        };
        return _this;
    }

    _createClass(todoList, [{
        key: "addTodo",

        //定义展示组件方法

        value: function addTodo(inputMemo) {
            //添加备忘条目数据
            this.state.listData.push({
                content: inputMemo,
                done: false
            });
            //setState（即调用render并更新state）
            this.setState(this.state);
        }
    }, {
        key: "switchMemo",
        value: function switchMemo(item) {
            console.log(item);
            item.done = !item.done; //取反，为true则false，反之亦然
            this.setState(this.state);
        }
    }, {
        key: "setShowType",
        value: function setShowType(showType) {
            this.setState({
                showType: showType
            });
        }
    }, {
        key: "dataFilter",
        value: function dataFilter() {
            switch (this.state.showType) {
                case "all":
                    return this.state.listData;
                case "completed":
                    return this.state.listData.filter(function (item) {
                        return item.done;
                    });
                case "active":
                    return this.state.listData.filter(function (item) {
                        return !item.done;
                    });
            }
        }
    }, {
        key: "render",


        //组织子组件结构（并将数据和方法通过props传递给子组件）
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "wrap" },
                _react2.default.createElement(_AddTodo2.default, { addTodo: function addTodo(inputMemo) {
                        return _this2.addTodo(inputMemo);
                    } }),
                _react2.default.createElement(_Node_list2.default, {
                    listData: this.dataFilter(),
                    switchMemo: function switchMemo(item) {
                        return _this2.switchMemo(item);
                    }
                }),
                _react2.default.createElement(_Filter2.default, {
                    showType: this.state.showType,
                    setShowType: function setShowType(showType) {
                        _this2.setShowType(showType);
                    }
                })
            );
        }
    }]);

    return todoList;
}(_react2.default.Component);

exports.default = todoList;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
	_inherits(List, _React$Component);

	function List(props) {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
	}

	_createClass(List, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"table",
				{ className: "empList" },
				_react2.default.createElement(
					"thead",
					null,
					_react2.default.createElement(
						"tr",
						null,
						_react2.default.createElement(
							"th",
							null,
							"\u5458\u5DE5\u7F16\u53F7"
						),
						_react2.default.createElement(
							"th",
							null,
							"\u5458\u5DE5\u59D3\u540D"
						),
						_react2.default.createElement(
							"th",
							null,
							"\u5458\u5DE5\u85AA\u6C34"
						),
						_react2.default.createElement(
							"th",
							null,
							"\u5458\u5DE5\u5C97\u4F4D"
						),
						_react2.default.createElement(
							"th",
							null,
							"\u64CD\u4F5C"
						)
					)
				),
				_react2.default.createElement(
					"tbody",
					null,
					this.props.listData.map(function (item, index) {
						return _react2.default.createElement(
							"tr",
							{ key: index },
							_react2.default.createElement(
								"td",
								null,
								item._id
							),
							_react2.default.createElement(
								"td",
								null,
								item.empName
							),
							_react2.default.createElement(
								"td",
								null,
								item.sal
							),
							_react2.default.createElement(
								"td",
								null,
								item.job
							),
							_react2.default.createElement(
								"td",
								null,
								_react2.default.createElement("input", { onClick: function onClick() {
										_this2.props.delFn(item._id);
									}, type: "button", value: "\u5220\u9664" })
							)
						);
					})
				)
			);
		}
	}]);

	return List;
}(_react2.default.Component);

exports.default = List;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
	_inherits(Pagination, _React$Component);

	function Pagination(props) {
		_classCallCheck(this, Pagination);

		return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));
	}

	_createClass(Pagination, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			//统一拿到props上的页码数据
			var _props = this.props,
			    curPage = _props.curPage,
			    eachPage = _props.eachPage,
			    sumPage = _props.sumPage,
			    maxPage = _props.maxPage,
			    setCurPage = _props.setCurPage;
			//依据最后页生成react的option(!)虚拟节点(!注意不是字符串，不是普通的html节点)，push进arr的是react组件对象而非字符串，放在render下会自动解构遍历

			var arr = [];
			for (var i = 1; i <= maxPage; i++) {
				arr.push(_react2.default.createElement(
					"option",
					{ value: i },
					i
				));
			}
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					null,
					"\u5F53\u524D\u9875: ",
					_react2.default.createElement(
						"select",
						{ ref: "curPage", onChange: function onChange() {
								setCurPage(_this2.refs.curPage.value);
							}, value: curPage },
						arr
					),
					"\u6BCF\u9875\u663E\u793A\u6761\u6570: ",
					_react2.default.createElement("input", { type: "text" }),
					"\u603B\u6761\u6570: ",
					_react2.default.createElement(
						"span",
						null,
						sumPage
					),
					"\u603B\u9875\u6570: ",
					_react2.default.createElement(
						"span",
						null,
						maxPage
					)
				),
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement("input", { onClick: function onClick() {
							setCurPage(1);
						}, type: "button", value: "\u9996\u9875" }),
					_react2.default.createElement("input", { onClick: function onClick() {
							if (curPage > 1) {
								setCurPage(--curPage);
							}
						}, type: "button", value: "\u4E0A\u4E00\u9875" }),
					_react2.default.createElement("input", { onClick: function onClick() {
							if (curPage < maxPage) {
								setCurPage(++curPage);
							}
						}, type: "button", value: "\u4E0B\u4E00\u9875" }),
					_react2.default.createElement("input", { onClick: function onClick() {
							setCurPage(maxPage);
						}, type: "button", value: "\u5C3E\u9875" })
				)
			);
		}
	}]);

	return Pagination;
}(_react2.default.Component);

exports.default = Pagination;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTodo = function (_React$Component) {
    _inherits(AddTodo, _React$Component);

    function AddTodo(props) {
        _classCallCheck(this, AddTodo);

        return _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));
    }

    _createClass(AddTodo, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("input", { ref: "inputMemo", type: "text" }),
                _react2.default.createElement("input", { type: "button", value: "add", onClick: function onClick() {
                        _this2.props.addTodo(_this2.refs.inputMemo.value);
                        _this2.refs.inputMemo.value = "";
                    } })
            );
        }
    }]);

    return AddTodo;
}(_react2.default.Component);

exports.default = AddTodo;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTodo = function (_React$Component) {
				_inherits(AddTodo, _React$Component);

				function AddTodo(props) {
								_classCallCheck(this, AddTodo);

								return _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));
				}

				_createClass(AddTodo, [{
								key: "render",
								value: function render() {
												return _react2.default.createElement(
																"div",
																null,
																_react2.default.createElement(
																				"span",
																				null,
																				"SHOW: "
																),
																" ",
																this.showType(this.props.showType, "all"),
																" ",
																this.showType(this.props.showType, "completed"),
																" ",
																this.showType(this.props.showType, "active")
												);
								}
				}, {
								key: "showType",
								value: function showType(_showType, name) {
												var _this2 = this;

												if (_showType === name) {
																return _react2.default.createElement(
																				"span",
																				null,
																				name
																);
												}
												return _react2.default.createElement(
																"a",
																{ onClick: function onClick(e) {
																								e.preventDefault();
																								_this2.props.setShowType(name);
																				},
																				href: "#" },
																name
												);
								}
				}]);

				return AddTodo;
}(_react2.default.Component);

exports.default = AddTodo;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTodo = function (_React$Component) {
    _inherits(AddTodo, _React$Component);

    function AddTodo(props) {
        _classCallCheck(this, AddTodo);

        return _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));
    }

    _createClass(AddTodo, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log(this.props);
            //注意此处listData是址传递（才能在主容器为Node_list定义的方法中通过栈地址直接更新堆数据），即item是每个条目的对象
            return _react2.default.createElement(
                "ul",
                null,
                this.props.listData.map(function (item, index) {
                    return _react2.default.createElement(
                        "li",
                        { key: "No." + index, onClick: function onClick() {
                                return _this2.props.switchMemo(item);
                            }, className: item.done ? "done" : "" },
                        item.content
                    );
                })
            );
        }
    }]);

    return AddTodo;
}(_react2.default.Component);

exports.default = AddTodo;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(42);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(124);

var _todoList = __webpack_require__(123);

var _todoList2 = _interopRequireDefault(_todoList);

var _reactRouter = __webpack_require__(8);

var _login = __webpack_require__(121);

var _login2 = _interopRequireDefault(_login);

var _reg = __webpack_require__(122);

var _reg2 = _interopRequireDefault(_reg);

var _info = __webpack_require__(119);

var _info2 = _interopRequireDefault(_info);

var _student = __webpack_require__(120);

var _student2 = _interopRequireDefault(_student);

var _emp = __webpack_require__(117);

var _emp2 = _interopRequireDefault(_emp);

var _getEmp = __webpack_require__(118);

var _getEmp2 = _interopRequireDefault(_getEmp);

var _addEmp = __webpack_require__(116);

var _addEmp2 = _interopRequireDefault(_addEmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////组件的生命周期
//var Wrap = React.createClass({
//	getDefaultProps() {
//		console.log("getDefaultProps")
//		return {
//			message: "hi",
//			name: "li4"
//		}
//	},
//	test() {
//		console.log(this.props.name)
//	},
//	render() {
//		return (
//			<div>
//				<h1>{ this.props.message + ": " + this.props.name }</h1>
//				<input onClick={() => {
//					console.log(this)
//				}} type="button" value="点击" />
//				{ this.props.children }
//			</div>
//		);
//	}
//})
//
//ReactDOM.render((
//	<Wrap 
//		message="hello" 
//		name="zhangsan"
//		{ ...user }
//		clickHandle={ clickHandle }>
//		{ test }
//	</Wrap>
//), app)

//-------------------------------self-计数----------------------------------
//外层容器(主容器)
var Container_count = _react2.default.createClass({
    displayName: "Container_count",
    getInitialState: function getInitialState() {
        return {
            name: "maxim",
            age: 23,
            sayName: function sayName() {
                console.log(this.name);
            },
            count: 0
        };
    },

    //定义各方法，在render时传给各展示组件
    plusCount: function plusCount() {
        this.setState({
            count: ++this.state.count
        });
        console.log(this.state.count);
    },
    setCount: function setCount(num) {
        console.log(num);
        this.setState({
            count: num
        });
    },

    //组织所有子组件结构(将外层容器state与子组件即展示组件props关联)
    render: function render() {
        var _this = this;

        return _react2.default.createElement(
            "div",
            { className: "wrap" },
            _react2.default.createElement(Node_num, { num: this.state.count, name: this.state.name }),
            _react2.default.createElement(Set_count, {
                plusCount: function plusCount() {
                    return _this.plusCount();
                },
                setCount: function setCount(num) {
                    return _this.setCount(num);
                }
            })
        );
    }
});
//展示组件
var Node_num = _react2.default.createClass({
    displayName: "Node_num",

    //默认值
    getDefaultProps: function getDefaultProps() {
        return {
            hobby: "GAMES"
        };
    },
    render: function render() {
        //定义本子组件结构
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "p",
                null,
                "\u4E3B\u5BB9\u5668state\u4E2Dname\u503C\u4F20\u9012\u5230\u672C\u5BB9\u5668\uFF1A",
                _react2.default.createElement(
                    "b",
                    null,
                    this.props.name
                )
            ),
            _react2.default.createElement(
                "p",
                null,
                "\u9ED8\u8BA4props\u503Chobby\uFF1A",
                _react2.default.createElement(
                    "b",
                    null,
                    this.props.hobby
                )
            ),
            _react2.default.createElement(
                "h3",
                null,
                "\u8BA1\u6570\uFF1A",
                this.props.num
            )
        );
    }
});
var Set_count = _react2.default.createClass({
    displayName: "Set_count",
    render: function render() {
        var _this2 = this;

        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("input", { type: "text", ref: "inputNum", placeholder: "\u91CD\u8BBE\u6570\u5B57" }),
            _react2.default.createElement("input", { type: "button", value: "\u8BA1\u6570+", onClick: function onClick() {
                    return _this2.props.plusCount();
                } }),
            _react2.default.createElement("input", { type: "button", value: "\u91CD\u7F6E/\u91CD\u8BBE", onClick: function onClick() {
                    console.log(_this2.refs.inputNum.value);
                    _this2.props.setCount(~~_this2.refs.inputNum.value);
                    _this2.refs.inputNum.value = "";
                } })
        );
    }
});
_reactDom2.default.render(_react2.default.createElement(Container_count, null), app);

//------------------------self-todoList----------------------------------

//定义主容器
var Container_todoList = _react2.default.createClass({
    displayName: "Container_todoList",

    //主要数据
    getInitialState: function getInitialState() {
        return {
            listData: [{
                content: "备忘1",
                done: false
            }, {
                content: "备忘2",
                done: true
            }, {
                content: "备忘3",
                done: true
            }, {
                content: "备忘4",
                done: false
            }],
            showType: "all"
        };
    },


    //各子组件方法（在主容器中定义才能操作主容器state及调用setState方法）
    addTodo: function addTodo(inputMemo) {
        //添加备忘条目数据
        this.state.listData.push({
            content: inputMemo,
            done: false
        });
        //setState（会调用render并更新state）
        this.setState(this.state);
    },
    switchMemo: function switchMemo(item) {
        console.log(item);
        item.done = !item.done; //取反，为true则false，反之亦然
        this.setState(this.state);
    },
    setShowType: function setShowType(showType) {
        this.setState({
            showType: showType
        });
    },
    dataFilter: function dataFilter() {
        switch (this.state.showType) {
            case "all":
                return this.state.listData;
            case "completed":
                return this.state.listData.filter(function (item) {
                    return item.done;
                });
            case "active":
                return this.state.listData.filter(function (item) {
                    return !item.done;
                });
        }
    },


    //组织子组件结构（并将数据和方法通过props传递给子组件）
    render: function render() {
        var _this3 = this;

        return _react2.default.createElement(
            "div",
            { className: "wrap" },
            _react2.default.createElement(AddTodo, { addTodo: function addTodo(inputMemo) {
                    return _this3.addTodo(inputMemo);
                } }),
            _react2.default.createElement(Node_list, {
                listData: this.dataFilter(),
                switchMemo: function switchMemo(item) {
                    return _this3.switchMemo(item);
                }
            }),
            _react2.default.createElement(FilterWrap, {
                showType: this.state.showType,
                setShowType: function setShowType(showType) {
                    _this3.setShowType(showType);
                }
            })
        );
    }
});
//子组件（展示组件）
var AddTodo = _react2.default.createClass({
    displayName: "AddTodo",
    render: function render() {
        var _this4 = this;

        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("input", { ref: "inputMemo", type: "text" }),
            _react2.default.createElement("input", { type: "button", value: "add", onClick: function onClick() {
                    _this4.props.addTodo(_this4.refs.inputMemo.value);
                    _this4.refs.inputMemo.value = "";
                } })
        );
    }
});
var Node_list = _react2.default.createClass({
    displayName: "Node_list",
    render: function render() {
        var _this5 = this;

        //注意此处listData是址传递（才能在主容器为Node_list定义的方法中通过栈地址直接更新堆数据），item是每个数据条目的对象
        return _react2.default.createElement(
            "ul",
            null,
            this.props.listData.map(function (item, index) {
                return _react2.default.createElement(
                    "li",
                    { key: "No." + index, onClick: function onClick() {
                            return _this5.props.switchMemo(item);
                        }, className: item.done ? "done" : "" },
                    item.content
                );
            })
        );
    }
});
var FilterWrap = _react2.default.createClass({
    displayName: "FilterWrap",
    render: function render() {
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "span",
                null,
                "SHOW: "
            ),
            " ",
            this.showType(this.props.showType, "all"),
            " ",
            this.showType(this.props.showType, "completed"),
            " ",
            this.showType(this.props.showType, "active")
        );
    },
    showType: function showType(_showType, name) {
        var _this6 = this;

        if (_showType === name) {
            return _react2.default.createElement(
                "span",
                null,
                name
            );
        }
        return _react2.default.createElement(
            "a",
            { onClick: function onClick(e) {
                    e.preventDefault();
                    _this6.props.setShowType(name);
                },
                href: "#" },
            name
        );
    }
});
//输出主容器
_reactDom2.default.render(_react2.default.createElement(Container_todoList, null), app2);

//-------------组件模块化 重构备忘录-------------------------


_reactDom2.default.render(_react2.default.createElement(_todoList2.default, null), app3);
//-------------react-router spa后台管理系统--------------------
//获取react-router


//使用react-router提供的组件进行模块化跳转（路由）(实际就是render加载Router和Route等组件)
//Router的history属性指定那种类型的路径，hashHistory则是地址栏锚点
//Route的path属性为路径匹配，component属性为加载的模块

//定义spa多级模块（树组件等等需要同时显示的），则将父Route和子Route嵌套（父Route写为闭合标签而不是单标签），这样可以在父模块的render中使用this.props.children加载子模块
//注意嵌套的Route子组件的path不要加斜杠，搭配子模块中的Link组件的to属性匹配路径以加载相应的子模块
_reactDom2.default.render(_react2.default.createElement(
    "div",
    { className: "wrap" },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.hashHistory },
        _react2.default.createElement(_reactRouter.Route, { path: "/", component: _login2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "/login", component: _login2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "/login/:username", component: _login2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "/reg", component: _reg2.default }),
        _react2.default.createElement(
            _reactRouter.Route,
            { path: "/info", component: _info2.default },
            _react2.default.createElement(
                _reactRouter.Route,
                { path: "emp", component: _emp2.default },
                _react2.default.createElement(_reactRouter.Route, { path: "getEmp", component: _getEmp2.default }),
                _react2.default.createElement(_reactRouter.Route, { path: "addEmp", component: _addEmp2.default })
            ),
            _react2.default.createElement(_reactRouter.Route, { path: "student", component: _student2.default })
        )
    )
), app5);

/***/ })

},[262]);
//# sourceMappingURL=bundle.js.map