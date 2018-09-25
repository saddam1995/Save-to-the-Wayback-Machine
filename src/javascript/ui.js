/*jslint node: true */
/*global debug, document */

"use strict";

/*
	Create, update or remove elements
 */
function UI() {
	var domElement = null;

	/**
	 * Does the element exist in the DOM
	 * @param {string} element Element id
	 * @return {boolean}
	 */
	this.isElement = function isElement(element) {

		var status = false;
		domElement = null;

		if (element !== 'undefined' || element !== null) {

			domElement = document.getElementById(element);

			if (domElement !== null) { // Element found

				status = true;

			} else {

				debug.log('Element not Found:' + element);

			}

		}

		return status;

	};

	/**
	 * Set or change the value of an element's textContent
	 * @param {string} element Element id
	 * @param {string} data
	 */
	this.content = function content(element, value) {

		if (this.isElement(element) === true && value !== undefined) {

			domElement.textContent = value;

		}

	};

	/**
	 * Change the visibility of an element
	 * @param {string} element - element id
	 * @param {string} action
	 */
	this.visibility = function visibility(element, action) {

		if (this.isElement(element) === true) {

			if (action === 'show') {
				
				this.removeClass(element, 'hide');

			} else if (action === 'hide') {

				this.addClass(element, 'hide');

			}

		}

	};

	/*
	 * Is the element displayed
	 * @param {string} element Element id
	*/
	this.isDisplayed = function isVisable(element) {

		if (this.isElement(element) === true) {

			var display = window.getComputedStyle(domElement).display;
			
			if (display !== 'none') {
				
				return true;
				
			}
			
		}
		
		return false;
		
	}

	
	/**
	 * Add a class to an element
	 * @param {string} element Element id
	 * @param {string} value Class name
	 */
	this.addClass = function addClass(element, value) {
	
		if (this.isElement(element) === true && typeof value !== 'undefined') {

			domElement.classList.add(value);

		}
	
	};
	
	/**
	 * Remove a class from an element
	 * @param {string} element Element id
	 * @param {string} value Class name
	 */
	this.removeClass = function removeClass(element, value) {
	
		if (this.isElement(element) === true && typeof value !== 'undefined') {

			domElement.classList.remove(value);

		}
	
	};
	
	/**
	 * Enable an input element
	 * @param {string} element Element id
	 */
	this.enableInput = function enableInput(element) {

		if (this.isElement(element) === true) {

			domElement.disabled = false;

		}

	};
	
	/**
	 * Disable an input element
	 * @param {string} element Element id
	 */
	this.disableInput = function disableInput(element) {

		if (this.isElement(element) === true) {

			domElement.disabled = true;

		}

	};

	/**
	 * Set or change an element's title
	 * @param {string} element Element id
	 * @param {boolean} value
	 */
	this.title = function title(element, value) {

		if (this.isElement(element) === true && typeof value !== 'undefined') {

			domElement.title = value;

		}

	};

	/**
	 * Set or change an element's attribute
	 * @param {string} element Element id
	 * @param {string} attr Attribute name
	 * @param {string} value - Attribute value
	 */
	this.attribute = function attribute(element, attr, value) {

		if (this.isElement(element) === true && typeof attr !== 'undefined' && typeof value !== 'undefined') {

			domElement.setAttribute(attr, value);

		}

	};

	/**
	 * Remove an attribute from an element
	 * @param {string} element Element id
	 * @param {string} attr Attribute name
	 */
	this.attributeRemove = function attributeRemove(element, attr) {

		if (this.isElement(element) === true && typeof attr !== 'undefined') {

			if (domElement.hasAttribute(attr)) {

				domElement.removeAttribute(attr);

			}

		}

	};

}