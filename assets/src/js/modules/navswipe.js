/**
 * Swipe nav class
 * Level 1 Navigation.
 * @module
 * @author Nic Bell
 */
var debounce = require('debounce');

/**
 * @constructor
 * @param {Element} element
 */
function NavSwipe(element) {
	this.element = element;
	this.swipe = this.element.querySelector('.nav-global-swipe');
	this.fps = 60;
	this.frameDuration = 1000 / this.fps;

	this.configure();
	this.addEvents();
}

NavSwipe.prototype.addEvents = function () {
	window.addEventListener('resize', debounce(this.configure.bind(this), 50));

	this.swipe.addEventListener('scroll', debounce(function () {
		window.dispatchEvent(new CustomEvent('NavSwipe:swipe'));
	}, 50));

	//TODO: fix this
	this.element.querySelector('.nav-global-arrow--left').addEventListener('click', function (e) {
		if (e) {
			e.preventDefault();
		}
		this.scrollTo(this.swipe.scrollLeft - 150, 500);
	 }.bind(this));

	this.element.querySelector('.nav-global-arrow--right').addEventListener('click', function (e) {
		if (e) {
			e.preventDefault();
		}
		this.scrollTo(this.swipe.scrollLeft + 150, 500);
	 }.bind(this));
};

/**
 * Configure swipable area
 */
NavSwipe.prototype.configure = function () {
	var navWidth = this.swipe.offsetWidth;
	var navItemsWidth = this.swipe.querySelector('.nav-global-list').offsetWidth;
	var isSwipeable = navItemsWidth > navWidth;

	if (isSwipeable) {
		this.element.classList.add('is-swipeable');

		var selectedItem = this.swipe.querySelector('.is-selected');
		if (selectedItem) {
			this.scrollToItem(selectedItem, 1000);
		}
	}
	else {
		this.element.classList.remove('is-swipeable');
		this.element.classList.remove('is-left');
		this.element.classList.remove('is-right');
	}
};

/**
 * Scroll to a nav item
 * @param {Element} item - Item to scroll to
 * @param {Number} duration - Animation duration
 */
NavSwipe.prototype.scrollToItem = function (item, duration) {
	var position = item.offsetLeft - ((this.swipe.offsetWidth - item.offsetWidth) / 2); // end centered
	this.scrollTo(position, duration);
};

/**
 * Scroll to a position using
 * easeOutCubic {@link https://gist.github.com/gre/1650294|easing function}.
 * @param {Number} position - Position to scroll to
 * @param {Number} duration - Animation duration
 */
NavSwipe.prototype.scrollTo = function (position, duration) {
	this.start = this.start || this.swipe.scrollLeft;
	this.elapsedTime = this.elapsedTime || 0;
	this.elapsedTime += this.frameDuration;

	var t = this.elapsedTime / duration;
	t = (--t) * t * t + 1; // easeOutCubic

	this.swipe.scrollLeft = this.start + ((position - this.start) * t);

	if (this.elapsedTime < duration) {
		setTimeout(this.scrollTo.bind(this, position, duration), this.frameDuration);
	}
	else {
		this.start = null;
		this.elapsedTime = null;

		// Set classes when we reach either side
		var isLeft = this.swipe.scrollLeft === 0;
		var isRight = this.swipe.scrollWidth === this.swipe.offsetWidth + this.swipe.scrollLeft;

		this.element.classList[isLeft ? 'add' : 'remove']('is-left');
		this.element.classList[isRight ? 'add' : 'remove']('is-right');
	}
};

module.exports = NavSwipe;
