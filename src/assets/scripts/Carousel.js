"use strict";

class Carousel {
  constructor(settings) {
    this.controlWrapperClass = settings.controlWrapper;
    this.videoWrapperClass = settings.videoWrapperClass;
    this.videoClass = settings.videoClass;
    this.invisibleClass = settings.invisibleClass;
    this.controlPrevClass = settings.controlPrevClass;
    this.controlNextClass = settings.controlNextClass;
    this.visibleVideo = settings.visibleVideo;

    this.controlWrapperElem = null;
    this.videoWrapperElem = null;
    this.videoElemList = null;

    this.currentVideoIndex = 0;
    this.nextVideoIndex = 0;
    this.prevVideoIndex = 0;

    this.currentVideo = null;
    this.nextVideo = null;
    this.prevVideo = null;
  }

  run() {
    this._init();
  }

  _init() {
    this.controlWrapperElem = document.querySelector(`.${this.controlWrapperClass}`);
    this.videoWrapperElem = document.querySelector(`.${this.videoWrapperClass}`);

    this.videoElemList = this.videoWrapperElem.querySelectorAll(`.${this.videoClass}`);

    this.nextVideoIndex = this.visibleVideo - 1;
    this.prevVideoIndex = this.videoElemList.length - 1;

    this.currentVideo = this.videoElemList[this.currentVideoIndex];
    this.nextVideo = this.videoElemList[this.nextVideoIndex];
    this.prevVideo = this.videoElemList[this.prevVideoIndex];

    this.controlWrapperElem.addEventListener('click',
      (event) => this._toggleSlide(event.target.classList)
    );
  }

  _toggleSlide(classList) {
    if (classList.contains(this.controlPrevClass)) {
      this._toggleToPrev();
    } else if (classList.contains(this.controlNextClass)) {
      this._toggleToNext();
    };
  }

  _toggleToPrev() {
    if (!this.nextVideo.classList.contains(this.invisibleClass)) {
      this.nextVideo.classList.toggle(this.invisibleClass);
      this._changeCurrentVideoToPrev();
      this._changeNextVideoToPrev();
      this._changePrevVideoToPrev();
      this.currentVideo.classList.toggle(this.invisibleClass);
    } else {
      this.currentVideo.classList.toggle(this.invisibleClass);
      this._changeCurrentVideoToPrev();
      this._changeNextVideoToPrev();
      this._changePrevVideoToPrev();
      this.prevVideo.classList.toggle(this.invisibleClass);
    };
  }

  _changeCurrentVideoToPrev() {
    this._changeCurrentVideoIndexToPrev();
    this.currentVideo = this.videoElemList[this.currentVideoIndex];
  }
  _changeCurrentVideoIndexToPrev() {
    this.currentVideoIndex = this.currentVideoIndex - 1 > -1 ?
      this.currentVideoIndex - 1 :
      this.videoElemList.length - 1;
  }
  
  _changeNextVideoToPrev() {
    this._changeNextVideoIndexToPrev();
    this.nextVideo = this.videoElemList[this.nextVideoIndex];
  }
  _changeNextVideoIndexToPrev() {
    this.nextVideoIndex = this.nextVideoIndex - 1 > -1 ?
      this.nextVideoIndex - 1 :
      this.videoElemList.length - 1;
  }

  _changePrevVideoToPrev() {
    this._changePrevVideoIndexToPrev();
    this.prevVideo = this.videoElemList[this.prevVideoIndex];
  }
  _changePrevVideoIndexToPrev() {
    this.prevVideoIndex = this.prevVideoIndex - 1 > -1 ?
      this.prevVideoIndex - 1 :
      this.videoElemList.length - 1;
  }

  _toggleToNext() {
    if (!this.nextVideo.classList.contains(this.invisibleClass)) {
      this.currentVideo.classList.toggle(this.invisibleClass);
      this._changeCurrentVideoToNext();
      this._changeNextVideoToNext();
      this._changePrevVideoToNext();
      this.nextVideo.classList.toggle(this.invisibleClass);
    } else {
      this.prevVideo.classList.toggle(this.invisibleClass);
      this._changeCurrentVideoToNext();
      this._changeNextVideoToNext();
      this._changePrevVideoToNext();
      this.currentVideo.classList.toggle(this.invisibleClass);
    };
  }

  _changeCurrentVideoToNext() {
    this._changeCurrentVideoIndexToNext();
    this.currentVideo = this.videoElemList[this.currentVideoIndex];
  }
  _changeCurrentVideoIndexToNext() {
    this.currentVideoIndex = this.currentVideoIndex + 1 < this.videoElemList.length ?
      this.currentVideoIndex + 1 :
      0;
  }

  _changeNextVideoToNext() {
    this._changeNextVideoIndexToNext();
    this.nextVideo = this.videoElemList[this.nextVideoIndex];
  }
  _changeNextVideoIndexToNext() {
    this.nextVideoIndex = this.nextVideoIndex + 1 < this.videoElemList.length ?
      this.nextVideoIndex + 1 :
      0;
  }

  _changePrevVideoToNext() {
    this._changePrevVideoIndexToNext();
    this.prevVideo = this.videoElemList[this.prevVideoIndex];
  }
  _changePrevVideoIndexToNext() {
    this.prevVideoIndex = this.prevVideoIndex + 1 < this.videoElemList.length ?
      this.prevVideoIndex + 1 :
      0;
  }
}

export { Carousel };
