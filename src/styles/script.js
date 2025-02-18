document.addEventListener("DOMContentLoaded", function () {
  // Fade-in effect for the h2 element (typewriter effect)
  const fadeElement = document.querySelector('.typewriter');
  const typeText = fadeElement.getAttribute('data-text');
  fadeElement.textContent = typeText;
  fadeElement.classList.add('fade-in');
  requestAnimationFrame(() => {
    fadeElement.classList.add('visible');
  });

  // Intersection Observer for scroll reveal (e.g., footer)
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  scrollElements.forEach(el => observer.observe(el));

  // Fade in all description boxes concurrently
  const descriptionBoxes = document.querySelectorAll('.description-box');
  descriptionBoxes.forEach(box => {
    const descText = box.getAttribute('data-text');
    box.textContent = descText;
    box.classList.add('fade-in');
    // Using requestAnimationFrame to trigger the fade-in transition
    requestAnimationFrame(() => {
      box.classList.add('visible');
    });
  });

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