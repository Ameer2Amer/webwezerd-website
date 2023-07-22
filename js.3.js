      let currentSlide = 0;
    slides = document.querySelectorAll(".slides"),
    leftArrow = document.querySelector(".carousel-btn-prev"),
    rightArrow = document.querySelector(".carousel-btn-next");
    
let clearSlides = () => {
    for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}

let displaySlides = () => {
    clearSlides();
    slides[0].style.display = "block";
}

let slideLeft = () => {
    clearSlides();
    slides[currentSlide - 1].style.display = "block";
    currentSlide--;
}

let slideRight = () => {
    clearSlides();
    slides[currentSlide + 1].style.display = "block";
    currentSlide++;
}

leftArrow.addEventListener("click", function() {
    if (currentSlide == 0) {
        currentSlide = slides.length;
    }
    slideLeft();
})

rightArrow.addEventListener("click", function() {
    if (currentSlide == slides.length - 1) {
        currentSlide = -1;
    }
    slideRight();
})

displaySlides();

// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  // Get the navigation links
  const navLinks = document.querySelectorAll("header ul li");

  // Add click event listener to each navigation link
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the target section ID from the link's data attribute
      const target = this.getAttribute("data-target");

      // Scroll smoothly to the target section
      document.getElementById(target).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  // Get the navigation links
  const navLinks = document.querySelectorAll("header ul li");

  // Add click event listener to each navigation link
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the target section ID from the link's data attribute
      const target = this.getAttribute("data-target");

      // Scroll smoothly to the target section
      document.getElementById(target).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});


