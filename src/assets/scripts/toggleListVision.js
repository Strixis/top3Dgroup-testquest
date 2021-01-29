"use strict";

const buttonClass = 'services-panel_item-text';
const wrapperSelector = '.mobile-control-panel';
const visionClass = '__hide'

function toggleListVision(wrapperSelector, buttonClass, visionClass) {
  const wrapperElement = document.querySelector(wrapperSelector);

  wrapperElement.addEventListener('click', (event) => {
    console.log('click')
    if (event.target.classList.contains(buttonClass)) {
      event.target.nextElementSibling.classList.toggle(visionClass)
    };
  });
};

toggleListVision(wrapperSelector, buttonClass, visionClass);
