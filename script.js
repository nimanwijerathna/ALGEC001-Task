// Get elements
const dots = document.querySelectorAll('.dot');
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const closeBtn = document.getElementById('close-btn');

// Add click event to dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideNumber = dot.getAttribute('data-slide');

    // Show slider
    slider.style.display = 'flex';

    // Hide all slides, then show the relevant one
    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    document.querySelector(`.slide[data-slide="${slideNumber}"]`).style.display = 'block';
  });
});

// Close slider
closeBtn.addEventListener('click', () => {
  slider.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper instance
  const swiper = document.querySelector(".mySwiper").swiper;

  // Get all dots
  const dots = document.querySelectorAll(".dot");

  // Add click event listeners to dots
  dots.forEach((dot) => {
      dot.addEventListener("click", function () {
          const slideIndex = parseInt(this.dataset.slide); // Get the slide index from the data-slide attribute
          swiper.slideTo(slideIndex); // Navigate to the corresponding slide
      });
  });
});

// Function to update dot content based on screen size
function updateDotsForMobile() {
  const dots = document.querySelectorAll('.dot');

  if (window.innerWidth <= 800) {
    // Change the content to numbers
    dots.forEach((dot, index) => {
      dot.querySelector('.plus').textContent = index + 1; // Set to 1, 2, 3, 4
    });
  } else {
    // Revert back to '+'
    dots.forEach(dot => {
      dot.querySelector('.plus').textContent = '+';
    });
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateDotsForMobile);

// Run on window resize
window.addEventListener('resize', updateDotsForMobile);
