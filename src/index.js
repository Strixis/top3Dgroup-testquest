import 'styles/normalize.css';
import 'fonts';
import 'styles';
import { ToggleVisibility } from 'scripts/ToggleVisibility';
import { Carousel } from 'scripts/Carousel';

const videoWrapperClass = 'video-row';
const videoClass = 'video-row_video';
const invisibleClass = '__hide';
let visibleSlides = 2;

const videoWrapperElem = document.querySelector(`.${videoWrapperClass}`);
const videoList = videoWrapperElem.querySelectorAll(`.${videoClass}`);

let mobile = false;

if (window.innerWidth < 1239) {
  mobile = true;
  visibleSlides = 1;
  videoList[1].classList.add(invisibleClass);
};

const toggleVisibility = new ToggleVisibility({
  buttonClass: 'services-panel_item-text',
  wrapperClass: 'navigation-mobile_panel',
  visionClass: '__hide',
})

const carousel = new Carousel({
  controlWrapper: 'video-about_control-panel',
  controlPrevClass: 'video-about_control-panel__left-control',
  controlNextClass: 'video-about_control-panel__right-control',
  sliderWrapperClass: videoWrapperClass,
  slideClass: videoClass,
  invisibleClass,
  visibleSlides,
});

toggleVisibility.run();
carousel.run();

(function() {

  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

       // The actualResizeHandler will execute at a rate of 15fps
       }, 132);
    }
  }

  function actualResizeHandler() {
    // handle the resize event
    if (window.matchMedia("screen and ( max-width: 1239px )").matches && (mobile === false)) {
      mobile = true;
      visibleSlides = 1;
      videoList[0].classList.remove(invisibleClass);
      videoList[1].classList.add(invisibleClass);
      videoList[2].classList.add(invisibleClass);
      carousel.rerun(visibleSlides);
    } else if (!window.matchMedia("screen and ( max-width: 1239px )").matches && (mobile === true)) {
      mobile = false;
      visibleSlides = 2;
      videoList[0].classList.remove(invisibleClass);
      videoList[1].classList.remove(invisibleClass);
      videoList[2].classList.add(invisibleClass);
      carousel.rerun(visibleSlides);
    };
  }

}());
