// Initialiser AOS (scroll animations)
AOS.init({
  duration: 800,
  once: true
});

// Toggle menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Filtrer les projets
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Activer le bouton
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    
    // Afficher / masquer les cartes
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        // Réappliquer l'animation AOS
        card.setAttribute('data-aos', 'fade-up');
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Formulaire simple
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Merci ! Votre message a été envoyé.');
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typewriter");
  const texts = el.getAttribute("data-text").split("|");
  let textIndex = 0;
  let charIndex = 0;
  let currentText = '';
  let isDeleting = false;
  
  function type() {
    const fullText = texts[textIndex];
    
    // Construire le texte en cours
    if (isDeleting) {
      currentText = fullText.substring(0, charIndex--);
    } else {
      currentText = fullText.substring(0, charIndex++);
    }
    
    el.textContent = currentText;
    
    // === Fin d'écriture du texte actuel ===
    if (!isDeleting && charIndex === fullText.length) {
      // Si c’est le dernier texte, on arrête tout ici, après affichage complet
      if (textIndex === texts.length - 1) {
        // On force l'affichage complet
        el.textContent = fullText;
        return;
      }
      
      // Sinon, on déclenche la suppression après un délai
      setTimeout(() => isDeleting = true, 1000);
    }
    
    // === Fin d'effacement ===
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex++;
    }
    
    // Vitesse dynamique
    const typingSpeed = isDeleting ? 40 : 80;
    setTimeout(type, typingSpeed);
  }
  
  type();
});
