// модальное окно
const wrapper = document.querySelector('.wrapper');
const headBtn = document.querySelector('.head-btn');
const modalStart = () => {
  const overlay = document.createElement('div');
  const modWindow = document.createElement('div');
  const closeBtn = document.createElement('button');
  const closeBtnIn = document.createElement('div');
  const iconClose = document.createElement('p');
  overlay.classList.add('overlay');
  modWindow.classList.add('mod-window');
  closeBtn.classList.add('mod-window__close-btn');
  closeBtnIn.classList.add('mod-window__circle');
  iconClose.classList.add('icon-close');
  closeBtnIn.prepend(iconClose);
  closeBtn.prepend(closeBtnIn);
  modWindow.prepend(closeBtn);
  overlay.prepend(modWindow);
  wrapper.prepend(overlay);
  document.body.style.overflow = 'hidden';
  const modalClose = () => {
    overlay.remove();
    document.body.style.overflow = 'visible';
  };
  overlay.addEventListener('click', modalClose);
  closeBtn.addEventListener('click', modalClose);
};
headBtn.addEventListener('click', modalStart);
// модальное окно
