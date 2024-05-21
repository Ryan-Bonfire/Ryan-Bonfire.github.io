function ownKeys(e, t) {
	var a = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		t &&
			(n = n.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			a.push.apply(a, n);
	}
	return a;
}
function _objectSpread(e) {
	for (var t = 1; t < arguments.length; t++) {
		var a = null != arguments[t] ? arguments[t] : {};
		t % 2
			? ownKeys(a, !0).forEach(function(t) {
					_defineProperty(e, t, a[t]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
			: ownKeys(a).forEach(function(t) {
					Object.defineProperty(
						e,
						t,
						Object.getOwnPropertyDescriptor(a, t)
					);
			  });
	}
	return e;
}
function _defineProperty(e, t, a) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
			  })
			: (e[t] = a),
		e
	);
}
function _classCallCheck(e, t) {
	if (!(e instanceof t))
		throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
	for (var a = 0; a < t.length; a++) {
		var n = t[a];
		(n.enumerable = n.enumerable || !1),
			(n.configurable = !0),
			'value' in n && (n.writable = !0),
			Object.defineProperty(e, n.key, n);
	}
}
function _createClass(e, t, a) {
	return (
		t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e
	);
}
var Accordion = (function() {
	function e() {
		var t =
			arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
		_classCallCheck(this, e),
			(t = Object.assign(e.defaults(), t)),
			Object.assign(this, t),
			this.getInstance();
	}
	return (
		_createClass(e, null, [
			{
				key: 'defaults',
				value: function() {
					return {
						hideByDefault: !0,
						hideExceptFirst: !0,
						singularMode: !1,
						singularAllowHide: !0,
						animationEase: 'cubic-bezier(.4,0,.2,1)',
						classGroup: '.ui-accordion',
						classItem: '.ui-accordion--item',
						classPanel: '.ui-accordion--panel',
						classButton: '.ui-accordion--button'
					};
				}
			}
		]),
		_createClass(
			e,
			[
				{
					key: 'getElements',
					value: function(e) {
						return {
							accordion: e,
							panel: e.querySelector(this.classPanel),
							button: e.querySelector(this.classButton)
						};
					}
				},
				{
					key: 'setAttributes',
					value: function(e, t) {
						var a = e.accordion,
							n = (e.button, e.panel);
						'expand' === t
							? (a.setAttribute('data-active', !0),
							  n.setAttribute('aria-expanded', !0))
							: (a.setAttribute('data-active', !1),
							  n.setAttribute('aria-expanded', !1));
					}
				},
				{
					key: 'animatorCore',
					value: function(t, a) {
						var n,
							i = e.getMaxHeight(t),
							r = { duration: 300, easing: this.animationEase };
						'collapse' === a &&
							((t.style.maxHeight = i),
							(n = [{ maxHeight: i }, { maxHeight: '0px' }])),
							'expand' === a &&
								((t.style.maxHeight = '0px'),
								(n = [{ maxHeight: '0px' }, { maxHeight: i }])),
							(t.animate(n, r).onfinish = function() {
								'collapse' === a && (i = '0px'),
									'expand' === a && (i = null),
									(t.style.maxHeight = i);
							});
					}
				},
				{
					key: 'removeActiveItem',
					value: function(e, t) {
						var a = t.activeItems.indexOf(e);
						-1 != a && t.activeItems.splice(a, 1);
					}
				},
				{
					key: 'collapse',
					value: function(e, t) {
						e.accordion;
						var a = e.panel;
						e.toggle;
						this.setAttributes(e),
							this.animatorCore(a, 'collapse'),
							this.removeActiveItem(e, t);
					}
				},
				{
					key: 'collapseInstant',
					value: function(e, t) {
						e.accordion, e.panel, e.toggle;
						this.animatorCore(e.panel, 'collapse'),
						this.setAttributes(e), this.removeActiveItem(e, t);
					}
				},
				{
					key: 'expand',
					value: function(e, t) {
						e.accordion;
						var a = e.panel;
						e.toggle;
						this.setAttributes(e, 'expand'),
							this.animatorCore(a, 'expand'),
							t.activeItems.push(e);
					}
				},
				{
					key: 'handleClick',
					value: function(e) {
						var t = this;
						e.group.addEventListener('click', function(a) {
							if (a.target.closest(t.classButton)) {
								var n = a.target.closest(t.classItem),
									i = e.accordions;
								for (var r in i) {
									var c = i[r].element;
									if (c.accordion == n)
										switch (t.singularAllowHide) {
											case !1:
												'false' === n.dataset.active &&
													t.expand(c, e);
												break;
											default:
												'false' === n.dataset.active
													? t.expand(c, e)
													: t.collapse(c, e);
										}
									else
										t.singularMode &&
											'true' ===
												c.accordion.dataset.active &&
											t.collapse(c, e);
								}
							}
						});
					}
				},
				{
					key: 'handleLoad',
					value: function(e) {
						var t = 0,
							a = e.accordions;
						for (var n in a)
							(this.hideExceptFirst && !t) ||
								((n = a[n].element),
								!0 === this.hideByDefault
									? this.collapseInstant(n, e)
									: this.setAttributes(n, 'expand')),
								t++;
					}
				},
				{
					key: 'getInstance',
					value: function() {
						var e = this;
						(this.generate = document.querySelectorAll(
							this.classGroup
						)),
							this.allObjects.forEach(function(t) {
								e.handleLoad(t), e.handleClick(t);
							});
					}
				},
				{
					key: 'generate',
					set: function(e) {
						var t = this,
							a = [];
						e.forEach(function(e) {
							var n = [];
							e.querySelectorAll(t.classItem).forEach(function(
								e
							) {
								(e = t.getElements(e)), n.push({ element: e });
							});
							var i = {
								accordions: _objectSpread({}, n),
								group: e,
								activeItems: []
							};
							(n = i), a.push(n), (i = null);
						}),
							(this.allObjects = a);
					}
				}
			],
			[
				{
					key: 'getMaxHeight',
					value: function(e) {
						return ''.concat(e.scrollHeight, 'px');
					}
				}
			]
		),
		e
	);
})();
