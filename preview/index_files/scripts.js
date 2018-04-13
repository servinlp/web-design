(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.handleClick = exports.handleClickEvents = undefined;

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleClickEvents() {

        var a = document.querySelectorAll('a');

        a.forEach(function (el) {
                return el.addEventListener('click', handleClick);
        });
}

function handleClick(e) {

        var link = e.target.tagName === 'A' ? e.target : e.target.parentNode.parentNode;

        if (!link.href.includes(window.location.origin)) return;

        e.preventDefault();

        if (window.history) {

                window.history.pushState({}, '', link.getAttribute('href'));
        }

        var section = document.querySelector('section'),
            main = document.querySelector('main'),
            oldA = Array.from(document.querySelectorAll('a'));

        oldA.forEach(function (el) {

                el.removeEventListener('click', handleClick);
        });

        section.remove();
        main.remove();

        window.scrollTo(0, 0);

        _routes2.default.goTo(link.getAttribute('href'), true);
}

exports.handleClickEvents = handleClickEvents;
exports.handleClick = handleClick;

},{"./routes.js":7}],2:[function(require,module,exports){
'use strict';

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _helpers = require('./helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

        _routes2.default.goTo(location.pathname);
        (0, _helpers.handleClickEvents)();
})();

},{"./helpers.js":1,"./routes.js":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _helpers = require('./helpers.js');

function renderNav(active) {

        var items = [{
                title: 'Work',
                link: '/'
        }, {
                title: 'About',
                link: '/about'
        }],
            nav = document.createElement('nav'),
            ul = document.createElement('ul');

        nav.appendChild(ul);

        items.forEach(function (el) {

                var li = document.createElement('li'),
                    a = document.createElement('a');

                a.textContent = el.title;
                a.setAttribute('href', el.link);
                a.addEventListener('click', _helpers.handleClick);

                if (active && active === el.link) {

                        li.setAttribute('aria-current', 'page');
                }

                li.appendChild(a);
                ul.appendChild(li);
        });

        return nav;
}

exports.default = renderNav;

},{"./helpers.js":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _projectThumbnails = require('./projectThumbnails.js');

var _projectThumbnails2 = _interopRequireDefault(_projectThumbnails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderOverview() {

        var main = document.createElement('main'),
            prev = document.createElement('button'),
            next = document.createElement('button'),
            ul = document.createElement('ul'),
            projectThumbnails = (0, _projectThumbnails2.default)();

        prev.textContent = '<';
        next.textContent = '>';

        prev.setAttribute('disabled', true);

        prev.addEventListener('click', function () {

                if (this.hasAttribute('disabled')) return;

                ul.classList.remove('next-page');

                next.removeAttribute('disabled');
                this.setAttribute('disabled', true);
        });

        next.addEventListener('click', function () {

                if (this.hasAttribute('disabled')) return;

                ul.classList.add('next-page');

                prev.removeAttribute('disabled');
                this.setAttribute('disabled', true);
        });

        ul.appendChild(projectThumbnails);
        main.appendChild(prev);
        main.appendChild(next);
        main.appendChild(ul);

        return main;
}

exports.default = renderOverview;

},{"./projectThumbnails.js":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _projects = require('./projects.js');

var _projects2 = _interopRequireDefault(_projects);

var _helpers = require('./helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderProjectThumbnails() {

        var fragment = document.createDocumentFragment();

        _projects2.default.forEach(function (el) {

                var li = document.createElement('li'),
                    a = document.createElement('a'),
                    h2 = document.createElement('h2'),
                    img = document.createElement('img'),
                    canvas = document.createElement('canvas'),
                    p = document.createElement('p'),
                    span = document.createElement('span'),
                    innerSpan = document.createElement('span'),
                    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                    path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

                svg.setAttribute('viewBox', '0 0 31.49 31.49');
                path.setAttribute('d', 'M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z');

                span.textContent = 'More';
                innerSpan.textContent = 'about ' + el.title;
                innerSpan.classList.add('hidden-from-view');

                span.appendChild(innerSpan);
                svg.appendChild(path);
                p.appendChild(span);
                p.appendChild(svg);

                li.classList.add(el.tile);

                h2.textContent = el.title;

                a.setAttribute('href', el.link);
                a.addEventListener('click', _helpers.handleClick);

                img.setAttribute('src', el.image);
                img.setAttribute('alt', '');

                a.appendChild(h2);
                a.appendChild(img);
                a.appendChild(canvas);
                a.appendChild(p);
                li.appendChild(a);

                fragment.appendChild(li);
        });

        return fragment;
}

exports.default = renderProjectThumbnails;

},{"./helpers.js":1,"./projects.js":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = [{
        title: 'Desk',
        link: '/project/desk',
        image: '/index_files/desk.png',
        tile: 'one-one'
}, {
        title: 'Intersection',
        link: '/project/intersection',
        image: 'index_files/intersection.png',
        tile: 'one-one'
}, {
        title: 'Bonsai',
        link: '/project/bonsai',
        image: 'index_files/bonsai.png',
        tile: 'two-one'
}, {
        title: 'Train',
        link: '/project/train',
        image: 'index_files/train.png',
        tile: 'two-one'
}, {
        title: 'Mitsubishi',
        link: '/project/mitsubishi',
        image: 'index_files/mitsubishi.png',
        tile: 'one-one'
}, {
        title: 'Books',
        link: '/project/books',
        image: 'index_files/books.png',
        tile: 'one-one'
}];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sideSection = require('./sideSection.js');

var _sideSection2 = _interopRequireDefault(_sideSection);

var _overview = require('./overview.js');

var _overview2 = _interopRequireDefault(_overview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routes = function () {
	function Routes() {
		_classCallCheck(this, Routes);
	}

	/**
 * @param {String} path		- Path of the current url (window.location.pathname)
 * @param {Boolean} internal	- Depending on whether the page is refreshed or not
 *				 you can load or append an object
 */

	_createClass(Routes, [{
		key: 'goTo',
		value: function goTo(path) {
			var internal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.path = path;

			var request = {
				paths: this.matchPath(this.path),
				internal: internal
			};

			if (!request.paths) {

				request['404'] = true;
				request.paths = {
					go: this.paths['*']
				};
			}

			if (this.singleProject) {

				this.singleProject.stopRendering();
				delete this.singleProject;
			}

			request.paths.go(request);
		}
	}, {
		key: 'matchPath',

		/**
  * @return {function} - Returns the function that belonges to the path
  */
		value: function matchPath() {

			if (this.paths[this.path]) {

				return {
					go: this.paths[this.path]
				};
			}

			var URLMatches = this.matchURL,
			    variableNames = [];

			// Resource:
			// http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash

			if (!URLMatches || !URLMatches.includes(':')) return null;

			var route = URLMatches.replace(/([:*])(\w+)/g, function (full, dots, name) {

				variableNames.push(name);

				/* eslint-disable no-useless-escape */
				return '([^\/]+)';
			}) + '(?:\/|$)',

			/* eslint-enable no-useless-escape */
			match = this.path.match(new RegExp(route));

			if (match) {

				var params = match.slice(1, match.length).reduce(function (param, value, i) {

					// if ( param === null ) param = {}

					param[variableNames[i]] = value;

					return param;
				}, {});

				return {
					go: this.paths[URLMatches],
					params: params
				};
			}
		}
	}, {
		key: 'paths',
		get: function get() {

			return {
				'/': function _(req) {

					document.body.appendChild((0, _sideSection2.default)('/'));
					document.body.appendChild((0, _overview2.default)());
				},
				'/project/:project': function projectProject(req) {

					console.log('project: ' + req.paths.params.project);
				},
				'/about': function about(req) {

					console.log('about');
				}
			};
		}
	}, {
		key: 'matchURL',
		get: function get() {
			var path = this.path,
			    dashLength = path.match(/\//g || []).length,
			    allPaths = Object.keys(this.paths),
			    possiblePaths = allPaths.filter(function (el) {
				return el.includes(':');
			}),
			    firstPart = path.substr(0, path.split('/', 2).join('/').length),
			    possibleMatches = possiblePaths.filter(function (el) {
				return el.includes(firstPart);
			})
			// Filter on the amount of dashes
			.filter(function (el) {
				return el.match(/\//ig || []).length === dashLength;
			})
			// Sort on links that end with an absolute path instead of a parameter
			.sort(function (a, b) {
				return b.lastIndexOf('/') > b.lastIndexOf(':');
			});

			if (possibleMatches.length === 0) return null;

			return possibleMatches.filter(function (el) {
				return possiblePaths.includes(el);
			})[0];
		}
	}]);

	return Routes;
}();

exports.default = new Routes();

},{"./overview.js":4,"./sideSection.js":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _nav = require('./nav.js');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderSection(navLink) {

        var nav = (0, _nav2.default)(navLink),
            section = document.createElement('section'),
            article = document.createElement('article'),
            div = document.createElement('div'),
            h1 = document.createElement('h1'),
            p = document.createElement('p');

        h1.textContent = 'Level 30 Wizards';
        p.textContent = 'Welcom to our simple portfolio';

        div.appendChild(h1);
        div.appendChild(p);

        article.appendChild(div);

        section.appendChild(nav);
        section.appendChild(article);

        return section;
}

exports.default = renderSection;

},{"./nav.js":3}]},{},[2]);
