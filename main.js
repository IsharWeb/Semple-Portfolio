  // ===== MOBILE MENU TOGGLE =====
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('ul');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
  });

  // ===== HERO LETTER-BY-LETTER ANIMATION =====
  const heroText = document.querySelector('.text-blue-600');
  const text = heroText.textContent;
  heroText.textContent = ''; // clear original text

  let index = 0;
  function typeLetter() {
    if (index < text.length) {
      heroText.textContent += text[index];
      index++;
      setTimeout(typeLetter, 150); // typing speed
    }
  }

  // Start typing effect after page load
  window.addEventListener('load', () => {
    typeLetter();
  });