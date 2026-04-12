function updateScrollLock() {
  const mobileMenu = document.querySelector('.js-menu-container');
  const backdrop = document.querySelector('[data-modal]');

  const isMenuOpen = mobileMenu?.classList.contains('is-open');
  const isModalOpen = backdrop && !backdrop.classList.contains('is-hidden');

  document.body.classList.toggle('no-scroll', isMenuOpen || isModalOpen);
}

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const backdrop = document.querySelector('[data-modal]'); // додали

  const updateScrollLock = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    const isModalOpen = backdrop && !backdrop.classList.contains('is-hidden');

    document.body.classList.toggle('no-scroll', isMenuOpen || isModalOpen);
  };

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true';

    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    updateScrollLock(); // ✅ замість toggle
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;

    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);

    updateScrollLock(); // ✅
  });
})();