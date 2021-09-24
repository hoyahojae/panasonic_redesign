// Swiper.js
new Swiper('.newp .swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },

  pagination: {
    el: '.newp .swiper-pagination',
  },

  navigation: {
    nextEl: '.newp .swiper-next',
    prevEl: '.newp .swiper-prev',
  },
});


var consBullet = ['카메라', '오디오', '헬스', '쉐이버&트리머', '구강케어', '헤어&뷰티', '생활가전'];
new Swiper('.cons .swiper', {
  direction: 'horizontal',
  spaceBetween: 40,
  pagination: {
    el: '.cons .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (consBullet[index]) + '</span></div>';
    }
  },
});


var figureBullet = ['프로젝터', '방송장비 시스템', '보안 시스템', '터프북', '파워툴', '헬스케어', 'Case Study'];
new Swiper('.systemb .swiper', {
  effect: 'fade',
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.systemb .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (figureBullet[index]) + '</span></div>';
    }
  },
});


// ScrollMagic.js
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .6
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// ALL MENU
document.querySelector('.allmenu .notview').addEventListener('click', function() {
  document.querySelector('.allmenu').classList.add('view');
});

document.querySelector('.allmenu .viewing').addEventListener('click', function() {
  document.querySelector('.allmenu').classList.remove('view');
});