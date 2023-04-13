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
// слайдер
const sliderData = [
  {
    title: 'standart',
    subtitle: 'Organize across all apps by hand',
    price: '10',
  },
  {
    title: 'business',
    subtitle: 'Organize across all apps by hand',
    price: '99',
  },
  {
    title: 'free',
    subtitle: 'Organize across all apps by hand',
    price: '0',
  },
];
const sliderContainer = document.querySelector('.slider__container');
const slides = sliderContainer.children;
//
const slide = document.querySelector('.slide');
slide.style.left = `-${
  (parseInt(getComputedStyle(slide).width) /
    1.2 /
    parseInt(getComputedStyle(sliderContainer).width)) *
  100
}%`;
//
for (let i = 1; i < sliderData.length; i++) {
  const slideCopy = slide.cloneNode(true);
  slideCopy.style.left = '';
  const slideTitle = slideCopy.querySelector('.slide__title');
  slideTitle.innerHTML = `${sliderData[i].title}`;
  const slideSubTitle = slideCopy.querySelector('.slide__subtitle');
  slideSubTitle.innerHTML = `${sliderData[i].subtitle}`;
  const slidePrice = slideCopy.querySelector('.slide__num');
  slidePrice.innerHTML = `${sliderData[i].price}`;
  sliderContainer.append(slideCopy);

  slideCopy.style.left = `${
    ((parseInt(getComputedStyle(slideCopy.previousElementSibling).left) +
      parseInt(getComputedStyle(slideCopy.previousElementSibling).width)) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 +
    10
  }%`;
  if (
    slideCopy.previousElementSibling.className !==
    'slider__slide slide _activeSlide'
  ) {
    slideCopy.classList.toggle('_activeSlide');
  }
}

//слайдер
