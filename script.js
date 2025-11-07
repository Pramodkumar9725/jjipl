document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill out all fields.');
  }
  
});

window.onscroll = function() {
  var scrollPosition = window.scrollY;
  var popup = document.querySelector('.whatsapp-popup');
  
  if (scrollPosition > 100) {  // Show after 200px scroll
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
};
const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.querySelector(".nav-links");

    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active"); // Toggle navigation menu on click
    });
    let currentIndex = 0;
    const boxes = document.querySelectorAll('.project');
    const totalBoxes = boxes.length;
    const slider = document.querySelector('.slider');
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    
    // Function to move the slider to the next set of boxes
    function moveSlider(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 3) % totalBoxes; // Loop back to the first set after the last one
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 3 + totalBoxes) % totalBoxes; // Loop back to the last set
        }
        slider.style.transform = `translateX(-${(currentIndex * 33.33)}%)`;
    }
    
    // Event listeners for the buttons
    nextButton.addEventListener('click', () => moveSlider('next'));
    prevButton.addEventListener('click', () => moveSlider('prev'));