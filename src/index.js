import 'styles/normalize.css';
import 'fonts';
import 'styles';
import { ToggleVisibility } from 'scripts/ToggleVisibility';
import { Carousel } from 'scripts/Carousel';

const carousel = new Carousel({
  controlWrapper: 'video-about_control-panel',
  controlPrevClass: 'video-about_control-panel__left-control',
  controlNextClass: 'video-about_control-panel__right-control',
  videoWrapperClass: 'video-row',
  videoClass: 'video-row_video',
  invisibleClass: '__hide',
});

const toggleVisibility = new ToggleVisibility({
  buttonClass: 'services-panel_item-text',
  wrapperClass: 'mobile-control-panel',
  visionClass: '__hide',

})

toggleVisibility.run();
carousel.run();
