const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
function enableImage(imgId, placeholderId) {
  const img = document.getElementById(imgId);
  const placeholder = document.getElementById(placeholderId);
  const show = () => {img.style.display = 'block'; placeholder.style.display = 'none';};
  img.addEventListener('load', show);
  img.addEventListener('error', () => {img.style.display = 'none'; placeholder.style.display = 'flex';});
  if (img.complete && img.naturalWidth > 0) show();
}
enableImage('portrait-image', 'portrait-placeholder');
enableImage('lumea-image', 'lumea-placeholder');
document.getElementById('year').textContent = new Date().getFullYear();
