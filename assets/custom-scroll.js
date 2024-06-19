(() => {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      customScroll();
      cunstomCloseHeaderDraer();
    }, 1000)
  });

  const customScroll = () => {
    const hashUrl = window.location.hash;
    if (!hashUrl) return;
    const section = document.querySelector(hashUrl)
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const cunstomCloseHeaderDraer = () => {
    const headerLinks = document.querySelectorAll('[data-custom-click]');
    const headerClose = document.querySelector('[data-custom-close]');
    if (!headerLinks || headerLinks.length === 0) return;
    headerLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        headerClose.click();
      });
    });
  }
})();