const toggleBtn = document.getElementById('toggle');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

openBtn.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

window.addEventListener('click', e => {
  e.target == modal ? modal.classList.remove('show-modal') : false;
});

window.addEventListener('keydown', e => {
  e.key === 'Escape' ? modal.classList.remove('show-modal') : false;
});
