const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');
      if (!isActive) {
        button.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        button.nextElementSibling.style.display = 'block';
      } else {
        button.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        button.nextElementSibling.style.display = 'none';
      }
    });
  });
