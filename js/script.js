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
    featureIn: [
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ],
  },
  {
    title: 'business',
    subtitle: 'Organize across all apps by hand',
    price: '99',
    featureIn: [
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ],
  },
  {
    title: 'free',
    subtitle: 'Organize across all apps by hand',
    price: '0',
    featureIn: [
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
      'Pricing Feature',
    ],
  },
];

const sliderContainer = document.querySelector('.slider__container');
const slides = sliderContainer.children;
const lBtn = document.querySelector('.slider__left');
const rBtn = document.querySelector('.slider__right');

for (let i = 0; i < sliderData.length; i++) {
  const slide = document.createElement('div');
  slide.classList.add('slider__slide');
  slide.classList.add('slide');
  sliderContainer.append(slide);
  const title = document.createElement('p');
  title.innerHTML = `${sliderData[i].title}`;
  title.classList.add('slide__title');
  slide.append(title);
  const subtitle = document.createElement('p');
  subtitle.innerHTML = `${sliderData[i].subtitle}`;
  subtitle.classList.add('slide__subtitle');
  slide.append(subtitle);
  const priceCont = document.createElement('div');
  priceCont.classList.add('slide__price');
  slide.append(priceCont);
  const number = document.createElement('p');
  number.innerHTML = `${sliderData[i].price}`;
  number.classList.add('slide__num');
  priceCont.append(number);
  const permonth = document.createElement('div');
  permonth.classList.add('slide__permonth');
  priceCont.append(permonth);
  const baks = document.createElement('p');
  baks.innerHTML = '$';
  baks.classList.add('slide__baks');
  permonth.append(baks);
  const perMonthStr = document.createElement('p');
  perMonthStr.innerHTML = 'Per Month';
  perMonthStr.classList.add('slide__per-month');
  permonth.append(perMonthStr);
  const features = document.createElement('div');
  features.classList.add('slide__feature');
  slide.append(features);
  for (let j = 0; j < sliderData[i].featureIn.length; j++) {
    const feature = document.createElement('p');
    feature.innerHTML = `${sliderData[i].featureIn[j]}`;
    feature.classList.add('slide__pr-feature');
    features.append(feature);
  }
  const btn = document.createElement('button');
  btn.innerHTML = 'Order now';
  btn.classList.add('doc-btn');
  btn.classList.add('slider__btn');
  slide.append(btn);
  if (i == 0) {
    slide.style.left = `-${
      (parseInt(getComputedStyle(slide).width) /
        1.2 /
        parseInt(getComputedStyle(sliderContainer).width)) *
      100
    }%`;
  } else {
    slide.style.left = `${
      ((parseInt(getComputedStyle(slide.previousElementSibling).left) +
        parseInt(getComputedStyle(slide.previousElementSibling).width)) /
        parseInt(getComputedStyle(sliderContainer).width)) *
        100 +
      10
    }%`;
    if (
      slide.previousElementSibling.className !==
      'slider__slide slide _activeSlide'
    ) {
      slide.classList.toggle('_activeSlide');
    }
  }
}
const slide = document.querySelector('.slider__slide');
const firstSlide = sliderContainer.lastElementChild.cloneNode(true);
sliderContainer.prepend(firstSlide);
firstSlide.style.left = `-${
  (parseInt(getComputedStyle(firstSlide).width) /
    parseInt(getComputedStyle(sliderContainer).width)) *
  100 *
  2
}%`;
console.log(firstSlide.style.left);
const lastSlide =
  sliderContainer.firstElementChild.nextElementSibling.cloneNode(true);

sliderContainer.append(lastSlide);
lastSlide.style.left = `${
  (parseInt(getComputedStyle(firstSlide).width) /
    parseInt(getComputedStyle(sliderContainer).width)) *
  100 *
  2.7
}%`;
console.log(lastSlide.style.left);
let count = 0;
const moveRight = () => {
  count =
    count +
    (parseInt(getComputedStyle(slides[0]).width) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 *
      2;
  const activeSlide = document.querySelector('._activeSlide');
  for (let slide of slides) {
    slide.style.transform = `translateX(${count}%)`;
  }
  activeSlide.previousElementSibling.classList.add('_activeSlide');
  activeSlide.classList.remove('_activeSlide');
  const newSlide = activeSlide.cloneNode(true);
  sliderContainer.prepend(newSlide);
  newSlide.style.left = `${
    parseInt(sliderContainer.firstElementChild.nextElementSibling.style.left) -
    (parseInt(getComputedStyle(sliderContainer.firstElementChild).width) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 *
      1.2
  }%`;
  sliderContainer.lastElementChild.remove();
};
const moveLeft = () => {
  count =
    count -
    (parseInt(getComputedStyle(slides[0]).width) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 *
      2;
  const activeSlide = document.querySelector('._activeSlide');
  for (let slide of slides) {
    slide.style.transform = `translateX(${count}%)`;
  }
  activeSlide.nextElementSibling.classList.add('_activeSlide');
  activeSlide.classList.remove('_activeSlide');
  const newSlide = activeSlide.cloneNode(true);
  sliderContainer.append(newSlide);
  newSlide.style.left = `${
    parseInt(
      sliderContainer.lastElementChild.previousElementSibling.style.left
    ) +
    (parseInt(getComputedStyle(sliderContainer.lastElementChild).width) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 *
      1.2
  }%`;
  sliderContainer.firstElementChild.remove();
};
rBtn.addEventListener('click', moveRight);
lBtn.addEventListener('click', moveLeft);

//слайдер
