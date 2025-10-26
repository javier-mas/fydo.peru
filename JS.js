/* JS.js — Interacciones básicas para FYDO */

/* Mobile menu toggle (shows/hides main nav) */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav') || document.querySelector('.nav-links');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    if (mainNav.style.display === 'flex') mainNav.style.display = 'none';
    else mainNav.style.display = 'flex';
  });
}

/* Video modal open/close */
const videoModal = document.getElementById('videoModal') || document.querySelector('.modal');
const playBtns = document.querySelectorAll('.btn-video, .video-btn, #playIndicador');
const modalClose = document.querySelectorAll('.modal-close, .cerrar, .close');

function openVideoModal(){
  if (!videoModal) return;
  videoModal.style.display = 'flex';
  const vid = videoModal.querySelector('video');
  if (vid) { vid.currentTime = 0; vid.play(); }
  document.body.style.overflow = 'hidden';
}
function closeVideoModal(){
  if (!videoModal) return;
  videoModal.style.display = 'none';
  const vid = videoModal.querySelector('video');
  if (vid) { vid.pause(); vid.currentTime = 0; }
  document.body.style.overflow = '';
}

playBtns.forEach(b => b && b.addEventListener('click', openVideoModal));
modalClose.forEach(b => b && b.addEventListener('click', closeVideoModal));

/* close clicking outside */
window.addEventListener('click', (e) => {
  if (e.target === videoModal) closeVideoModal();
});

/* Contact form handler (no backend) */
function handleContact(e){
  if (e && e.preventDefault) e.preventDefault();
  alert('Gracias — tu mensaje fue enviado (simulado). En producción esto llamaría al backend).');
  if (e.target) e.target.reset();
  return false;
}
window.handleContact = handleContact;
