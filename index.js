document.addEventListener("DOMContentLoaded", function() {
  const clubTitle = document.querySelector(".club-title");
  clubTitle.addEventListener("click", function() {
      window.location.href = "index.html";
  });
});

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let heroContent = document.querySelector('.hero-content');
    let belowimage = document.querySelector('.below-image')
    let heroImage = document.querySelector('.hero-image');
    let distanceFromTop = heroImage.offsetTop;
    let distanceScrolled = distanceFromTop - scrollTop;
    heroContent.style.transform = `translateY(${distanceScrolled * 0.5}px)`; // Adjust the multiplier for speed
    belowimage.style.transform = `translateY(${distanceScrolled * 0.5}px)`;
});

$(function () {
  $('.bxslider').bxSlider({
    mode: 'fade',
    slideWidth: 'full',
    auto: false,
    speed: 900,
    pause: 4000,
    onSlideAfter: function ($currentSlide, $oldSlide, $oldIndex, $newIndex) {
        
    }
  });
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});