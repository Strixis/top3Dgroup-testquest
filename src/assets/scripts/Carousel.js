"use strict";

class Carousel {
  constructor(settings) {
    this.controlWrapperClass = settings.controlWrapper;
    this.sliderWrapperClass = settings.sliderWrapperClass;
    this.slideClass = settings.slideClass;
    this.invisibleClass = settings.invisibleClass;
    this.controlPrevClass = settings.controlPrevClass;
    this.controlNextClass = settings.controlNextClass;
    this.visibleSlides = settings.visibleSlides;

    this.controlWrapperElem = null;
    this.slideWrapperElem = null;
    this.slideElemList = null;

    this.currentSlideIndex = 0;
    this.nextSlideIndex = 0;
    this.prevSlideIndex = 0;

    this.currentSlide = null;
    this.nextSlide = null;
    this.prevSlide = null;
  }

  run() {
    this._init();
  }

  _init() {
    this.controlWrapperElem = document.querySelector(`.${this.controlWrapperClass}`);
    this.slideWrapperElem = document.querySelector(`.${this.sliderWrapperClass}`);

    this.slideElemList = this.slideWrapperElem.querySelectorAll(`.${this.slideClass}`);

    this.nextSlideIndex = this.visibleSlides - 1;
    this.prevSlideIndex = this.slideElemList.length - 1;

    this.currentSlide = this.slideElemList[this.currentSlideIndex];
    this.nextSlide = this.slideElemList[this.nextSlideIndex];
    this.prevSlide = this.slideElemList[this.prevSlideIndex];

    this._toggleSlide = this._toggleSlide.bind(this);
    this.controlWrapperElem.addEventListener('click',
      this._toggleSlide
    );
  }

  _toggleSlide(event) {
    if (event.target.classList.contains(this.controlPrevClass)) {
      this._toggleToPrev();
    } else if (event.target.classList.contains(this.controlNextClass)) {
      this._toggleToNext();
    };
  }

  _toggleToPrev() {
    if (!this.nextSlide.classList.contains(this.invisibleClass)) {
      this.nextSlide.classList.toggle(this.invisibleClass);
      this._changeCurrentSlideToPrev();
      this._changeNextSlideToPrev();
      this._changePrevSlideToPrev();
      this.currentSlide.classList.toggle(this.invisibleClass);
    } else {
      this.currentSlide.classList.toggle(this.invisibleClass);
      this._changeCurrentSlideToPrev();
      this._changeNextSlideToPrev();
      this._changePrevSlideToPrev();
      this.prevSlide.classList.toggle(this.invisibleClass);
    };
  }

  _changeCurrentSlideToPrev() {
    this._changeCurrentSlideIndexToPrev();
    this.currentSlide = this.slideElemList[this.currentSlideIndex];
  }
  _changeCurrentSlideIndexToPrev() {
    this.currentSlideIndex = this.currentSlideIndex - 1 > -1 ?
      this.currentSlideIndex - 1 :
      this.slideElemList.length - 1;
  }
  
  _changeNextSlideToPrev() {
    this._changeNextSlideIndexToPrev();
    this.nextSlide = this.slideElemList[this.nextSlideIndex];
  }
  _changeNextSlideIndexToPrev() {
    this.nextSlideIndex = this.nextSlideIndex - 1 > -1 ?
      this.nextSlideIndex - 1 :
      this.slideElemList.length - 1;
  }

  _changePrevSlideToPrev() {
    this._changePrevSlideIndexToPrev();
    this.prevSlide = this.slideElemList[this.prevSlideIndex];
  }
  _changePrevSlideIndexToPrev() {
    this.prevSlideIndex = this.prevSlideIndex - 1 > -1 ?
      this.prevSlideIndex - 1 :
      this.slideElemList.length - 1;
  }

  _toggleToNext() {
    if (!this.nextSlide.classList.contains(this.invisibleClass)) {
      this.currentSlide.classList.toggle(this.invisibleClass);
      this._changeCurrentSlideToNext();
      this._changeNextSlideToNext();
      this._changePrevSlideToNext();
      this.nextSlide.classList.toggle(this.invisibleClass);
    } else {
      this.prevSlide.classList.toggle(this.invisibleClass);
      this._changeCurrentSlideToNext();
      this._changeNextSlideToNext();
      this._changePrevSlideToNext();
      this.currentSlide.classList.toggle(this.invisibleClass);
    };
  }

  _changeCurrentSlideToNext() {
    this._changeCurrentSlideIndexToNext();
    this.currentSlide = this.slideElemList[this.currentSlideIndex];
  }
  _changeCurrentSlideIndexToNext() {
    this.currentSlideIndex = this.currentSlideIndex + 1 < this.slideElemList.length ?
      this.currentSlideIndex + 1 :
      0;
  }

  _changeNextSlideToNext() {
    this._changeNextSlideIndexToNext();
    this.nextSlide = this.slideElemList[this.nextSlideIndex];
  }
  _changeNextSlideIndexToNext() {
    this.nextSlideIndex = this.nextSlideIndex + 1 < this.slideElemList.length ?
      this.nextSlideIndex + 1 :
      0;
  }

  _changePrevSlideToNext() {
    this._changePrevSlideIndexToNext();
    this.prevSlide = this.slideElemList[this.prevSlideIndex];
  }
  _changePrevSlideIndexToNext() {
    this.prevSlideIndex = this.prevSlideIndex + 1 < this.slideElemList.length ?
      this.prevSlideIndex + 1 :
      0;
  }

  rerun(visibleSlides) {
    this.controlWrapperElem.removeEventListener('click',
      this._toggleSlide
    );

    this.currentSlideIndex = 0;
    this.nextSlideIndex = 0;
    this.prevSlideIndex = 0;
    this.visibleSlides = visibleSlides;

    this.nextSlideIndex = this.visibleSlides - 1;
    this.prevSlideIndex = this.slideElemList.length - 1;

    this.currentSlide = this.slideElemList[this.currentSlideIndex];
    this.nextSlide = this.slideElemList[this.nextSlideIndex];
    this.prevSlide = this.slideElemList[this.prevSlideIndex];

    this.controlWrapperElem.addEventListener('click',
      this._toggleSlide
    );
  }
}

export { Carousel };
