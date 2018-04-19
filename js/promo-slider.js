'use strict';

var promoSlider = document.querySelector('.slider-promo');

if (promoSlider) {
  var promoSliderBreadcrumb = promoSlider.querySelectorAll('.slider-promo__controls-item');
  var promoSliderSlides = promoSlider.querySelectorAll('.slider-promo__item');
  var promoSliderBreadcrumbIndex;


  for (var i = 0; i < promoSliderBreadcrumb.length; i++) {
    promoSliderBreadcrumb[i].addEventListener('click', function (event) {
      for (var j = 0; j < promoSliderBreadcrumb.length; j++) {
        promoSliderBreadcrumb[j].removeAttribute('disabled');
        promoSliderSlides[j].classList.remove('slider-promo__item--active');
      }
      promoSliderBreadcrumbIndex = Array.prototype.indexOf.call(
          event.currentTarget.parentElement.children, event.currentTarget
      );
      event.currentTarget.setAttribute('disabled', 'disabled');
      promoSliderSlides[promoSliderBreadcrumbIndex].classList.add('slider-promo__item--active');
    });
  }

}
