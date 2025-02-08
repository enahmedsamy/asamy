document.addEventListener("DOMContentLoaded", function () {
    // Typewriter effect for the h2 element
    const typewriterElement = document.querySelector('.typewriter');
    const text = typewriterElement.getAttribute('data-text');
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed as needed
      }
    }
    typewriterElement.textContent = "";
    typeWriter();
  
    // Intersection Observer for scroll reveal (if needed for footer etc.)
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    scrollElements.forEach(el => observer.observe(el));
  
    // Typewriter effect for description boxes on click
    function typeWriterEffect(element, text, speed = 20) {
      let i = 0;
      element.textContent = "";
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }
  
    // Add click event listener to each section title
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
      title.addEventListener('click', function() {
        // Get the next sibling element which should be the description-box
        const descriptionBox = this.nextElementSibling;
        if (descriptionBox && descriptionBox.classList.contains('description-box')) {
          // If already displayed, do nothing
          if (descriptionBox.style.display === "block") return;
          // Reveal the box
          descriptionBox.style.display = "block";
          // Get the text stored in data-text
          const descText = descriptionBox.getAttribute('data-text');
          // Run the typewriter effect on the description box
          typeWriterEffect(descriptionBox, descText, 5);
        }
      });
    });
  });