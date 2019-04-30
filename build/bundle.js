/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OptlyInfo = __webpack_require__(13);

var _OptlyInfo2 = _interopRequireDefault(_OptlyInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We use this type of route structure because its server side rendered 
// Therefore, we need this syntax to use React router config module
exports.default = [{
    loadData: _OptlyInfo.loadData,
    path: '/',
    component: _OptlyInfo2.default,
    exact: true
}];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.datafileFetch = exports.FETCH = undefined;

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH = exports.FETCH = 'fetch_datafile';
var datafileFetch = exports.datafileFetch = function datafileFetch() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var res, userID;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _axios2.default.get('https://cdn.optimizely.com/datafiles/VCCTQUjFWZMiYVSuikaVuQ.json');

                        case 2:
                            res = _context.sent;
                            userID = 'Peter';


                            dispatch({
                                type: FETCH,
                                optlyInfo: {
                                    datafile: res.data,
                                    userID: userID
                                }
                            });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@optimizely/react-sdk");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(16);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(5);

var _Routes = __webpack_require__(1);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate the express server object "app"
var app = (0, _express2.default)();

// This line tells express that the "public" folder should be publicly available client side 
app.use(_express2.default.static('public'));

app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

// Wildcard handler for any route
app.get('*', function (req, res) {

    //instantiate initial redux store on the server
    var store = (0, _createStore2.default)();

    //Take incoming request path (the page the user is trying to fetch) and decide which components to render
    //The following is an example of what matchRoutes returns:
    // [ { route: 
    //     { path: '/optly',
    //       component: [Function],
    //       loadData: [Function: loadData] },
    //    match: { path: '/optly', url: '/optly', isExact: true, params: {} } } ]

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        //if the load data function exists in the route object, then call it passing in the server rendered redux store
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(function () {

        // Send the browser the return from our renderer function (refactoring that isn't necessary but good for scale)
        res.send((0, _renderer2.default)(req, store));
    });
});

// Broacast this to local host 3000
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(12);

var _Routes = __webpack_require__(1);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(5);

var _reactSdk = __webpack_require__(4);

var _jsWebSdk = __webpack_require__(15);

var optimizelySDK = _interopRequireWildcard(_jsWebSdk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    //get the store that server generated
    var storeJSON = store.getState();

    // Instantiate client to use for server side rendering
    var optimizelyClientInstance = optimizelySDK.createInstance({ datafile: storeJSON.optlyInfo.datafile });

    // RendertoString method is only used on the server!
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactSdk.OptimizelyProvider,
        { optimizely: optimizelyClientInstance, userId: storeJSON.optlyInfo.userID, isServerSide: true },
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.url, context: {} },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
                )
            )
        )
    ));
    //This the basic html template to send to the client, it includes the content (home component) as well as the client side bundle.js as a script tag
    // The reason the script tag below doesn't need something like "public/bundle.js" is because the public folder is the only thing available so its essentially the root directory
    return '\n    <html>\n        <head></head>\n        <body>\n        <div id=\'root\'>' + content + '</div>\n        <script>\n        window.INITIAL_STATE=' + JSON.stringify(store.getState()) + '\n        </script>\n        <script src=\'bundle.js\'></script>\n        </body>\n    </html>\n    ';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _reactSdk = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptlyInfo = function (_React$Component) {
    _inherits(OptlyInfo, _React$Component);

    function OptlyInfo() {
        _classCallCheck(this, OptlyInfo);

        return _possibleConstructorReturn(this, (OptlyInfo.__proto__ || Object.getPrototypeOf(OptlyInfo)).apply(this, arguments));
    }

    _createClass(OptlyInfo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactSdk.OptimizelyFeature,
                { feature: 'first_feature' },
                function (featureEnabled) {
                    return featureEnabled ? _react2.default.createElement(
                        'p',
                        null,
                        'enabled'
                    ) : _react2.default.createElement(
                        'p',
                        null,
                        'disabled'
                    );
                }
            );
        }
    }]);

    return OptlyInfo;
}(_react2.default.Component);

function mapStateToProps(state) {
    return { optlyInfo: state.optlyInfo };
}

function loadData(store) {
    return store.dispatch((0, _actions.datafileFetch)());
}

exports.loadData = loadData;

// Here we are providing functions (i.e the bucketing function) from the actions folder and make them available to the component

exports.default = (0, _reactRedux.connect)(mapStateToProps, { datafileFetch: _actions.datafileFetch })(OptlyInfo);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@optimizely/js-web-sdk");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(17);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(18);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
}; // This file takes care of instantiating redux store for the server

// Do our imports

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _optlyReducer = __webpack_require__(19);

var _optlyReducer2 = _interopRequireDefault(_optlyReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This file combines the multiple reducers you may have

exports.default = (0, _redux.combineReducers)({
    optlyInfo: _optlyReducer2.default
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(3);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH:
            return action.optlyInfo;
        default:
            return state;
    }
};

/***/ })
/******/ ]);