document.addEventListener("DOMContentLoaded", function () {
    // Typewriter effect for h2 element
    const typewriterElement = document.querySelector('.typewriter');
    const text = typewriterElement.getAttribute('data-text');
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    typewriterElement.textContent = "";
    typeWriter();
  
    // Intersection Observer for scroll reveal (e.g., footer)
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
    function typeWriterEffect(element, text, speed = 50) {
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
  
    // Section title click events (toggle active state and reveal description)
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
      title.addEventListener('click', function() {
        // Remove active class from all section titles
        sectionTitles.forEach(t => t.classList.remove('active'));
        // Add active class to clicked title
        this.classList.add('active');
        
        const descriptionBox = this.nextElementSibling;
        if (descriptionBox && descriptionBox.classList.contains('description-box')) {
          // If already displayed, do nothing
          if (descriptionBox.style.display === "block") return;
          // Hide any other open description boxes
          document.querySelectorAll('.description-box').forEach(box => {
            if (box !== descriptionBox) {
              box.style.display = "none";
            }
          });
          // Reveal the box and run typewriter effect
          descriptionBox.style.display = "block";
          const descText = descriptionBox.getAttribute('data-text');
          typeWriterEffect(descriptionBox, descText, 1);
        }
      });
    });
  
    // Automatically open the first section ("Career Journey") after 1 second
    setTimeout(() => {
      if (sectionTitles.length > 0) {
        sectionTitles[0].classList.add('bounce');
        sectionTitles[0].click();
        setTimeout(() => {
          sectionTitles[0].classList.remove('bounce');
        }, 500);
      }
    }, 1000);
  
    // Dark mode toggle event
    const modeSwitch = document.getElementById('mode-switch');
    modeSwitch.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        document.querySelector('.page-container').classList.add('dark-mode');
        document.querySelector('.toggle-icon').innerHTML = '<i class="fas fa-moon"></i>';
        document.querySelector('.toggle-text').textContent = 'Dark';
      } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('.page-container').classList.remove('dark-mode');
        document.querySelector('.toggle-icon').innerHTML = '<i class="fas fa-sun"></i>';
        document.querySelector('.toggle-text').textContent = 'Light';
      }
    });
  });