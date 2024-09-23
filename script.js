let currentSlide = 0;

function moveSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  currentSlide += n;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const slideWidth = slides[0].clientWidth;
  document.querySelector(".slides").style.transform = `translateX(${
    -currentSlide * slideWidth
  }px)`;
}
