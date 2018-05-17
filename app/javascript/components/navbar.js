function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= (0.9*window.innerHeight)) {
      navbar.classList.add('navbar-wagon-white');
    } else {
      navbar.classList.remove('navbar-wagon-white');
    }
  });
}

export { initUpdateNavbarOnScroll };
