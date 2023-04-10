// модальное окно
const wrapper = document.querySelector('.wrapper');
const headBtn = document.querySelector('.head-btn');
const burger = document.querySelector('.burger');
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
  if (burger.classList.value == `header__burger burger _burger-active`) {
    burger.classList.toggle('_burger-active');
  }
  overlay.addEventListener('click', modalClose);
  closeBtn.addEventListener('click', modalClose);
};
headBtn.addEventListener('click', modalStart);
// модальное окно
// бургер
const headerHead = document.querySelector('.header__head');
for (let i = 1; i <= 3; i++) {
  const burgerLine = document.createElement('div');
  burgerLine.classList.add(`burger__line${i}`);
  burger.append(burgerLine);
}
const burgerTrans = () => {
  burger.classList.toggle('_burger-active');
  const burgerClose = () => {
    burger.classList.toggle('_burger-active');
    headerHead.lastElementChild.previousElementSibling.remove();
    headerHead.lastElementChild.remove();
  };
  if (headerHead.children.length < 4) {
    const sidebar = document.createElement('div');
    const overlay = document.createElement('div');
    const menu = document.querySelector('.menu').cloneNode(true);
    const socials = document.querySelector('.header__socials').cloneNode(true);
    socials.className = '_burger-soc';
    menu.style.display = 'flex';
    sidebar.classList.add('header__sidebar');
    overlay.classList.add('overlay');
    headerHead.append(overlay);
    sidebar.prepend(menu);
    sidebar.append(socials);
    headerHead.append(sidebar);
    overlay.addEventListener('click', burgerClose);
  } else {
    headerHead.lastElementChild.previousElementSibling.remove();
    headerHead.lastElementChild.remove();
  }
};
burger.addEventListener('click', burgerTrans);
// бургер
