import 'styles/normalize.css';
import 'fonts';
import 'styles';
import { ToggleVisibility } from 'scripts/ToggleVisibility';
import { Carousel } from 'scripts/Carousel';

const videoWrapperClass = 'video-row';
const videoClass = 'video-row_video';
const invisibleClass = '__hide';

const videoWrapperElem = document.querySelector(`.${videoWrapperClass}`);
const videoList = videoWrapperElem.querySelectorAll(`.${videoClass}`);
if (window.innerWidth < 1239) videoList[1].classList.add(invisibleClass);

const carousel = new Carousel({
  controlWrapper: 'video-about_control-panel',
  controlPrevClass: 'video-about_control-panel__left-control',
  controlNextClass: 'video-about_control-panel__right-control',
  videoWrapperClass,
  videoClass,
  invisibleClass,
  visibleVideo: window.innerWidth > 1239 ? 2 : 1,
});

const toggleVisibility = new ToggleVisibility({
  buttonClass: 'services-panel_item-text',
  wrapperClass: 'mobile-control-panel',
  visionClass: '__hide',

})

toggleVisibility.run();
carousel.run();
