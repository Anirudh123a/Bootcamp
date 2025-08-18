  var currentIndex = 0;
  var slides = document.querySelectorAll('.carousel-slide');
  var dots = [
    document.getElementById('dot0'),
    document.getElementById('dot1'),
    document.getElementById('dot2')
  ];
  var track = document.getElementById('carouselTrack');

  function updateCarousel() {
    track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  setInterval(function () {
    nextSlide();
  }, 4000); // Autoplay every 4 seconds
