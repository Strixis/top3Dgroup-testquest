import 'styles/normalize.css';
import 'fonts';
import 'styles';
import 'scripts/toggleListVision';
import { Carousel } from 'scripts/Carousel';

const carousel = new Carousel({
  controlWrapper: 'video-about_control-panel',
  controlPrevClass: 'video-about_control-panel__left-control',
  controlNextClass: 'video-about_control-panel__right-control',
  videoWrapperClass: 'video-row',
  videoClass: 'video-row_video',
  invisibleClass: '__hide',
});

carousel.run();
