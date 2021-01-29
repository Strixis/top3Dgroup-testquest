"use strict";

const settings = {
  buttonClass: 'services-panel_item-text',
  wrapperSelector: '.mobile-control-panel',
  visionClass: '__hide',
};

function toggleListVision(settings) {
  const wrapperElement = document.querySelector(settings.wrapperSelector);

  wrapperElement.addEventListener('click', (event) => {
    console.log('click')
    if (event.target.classList.contains(settings.buttonClass)) {
      event.target.nextElementSibling.classList.toggle(settings.visionClass)
    };
  });
};

toggleListVision(settings);
