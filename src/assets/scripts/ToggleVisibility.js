"use strict";

class ToggleVisibility {
  constructor(settings) {
    this.buttonClass = settings.buttonClass;
    this.wrapperClass = settings.wrapperClass;
    this.visionClass = settings.visionClass;

    this.wrapperElem - null;
  }

  run() {
    this._init();
  }

  _init() {
    this.wrapperElem = document.querySelector(`.${this.wrapperClass}`);

    this._toggleVisibility();
  }

  _toggleVisibility() {
    this.wrapperElem.addEventListener('click', (event) => {
      if (event.target.classList.contains(this.buttonClass)) {
        event.target.nextElementSibling.classList.toggle(this.visionClass)
      };
    });
  }
}

export { ToggleVisibility };
