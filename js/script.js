import axios from 'axios';
let TBconfig = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.binance.com/sapi/v1/capital/config/getall?timestamp=1687332404014&signature=0f7ef653115fdacc1754317a0fdad1dbd5046472313abf9011030e5d8f7f4b1b',
  headers: {
    'Content-Type': 'application/json',
    'X-MBX-APIKEY':
      'GptpQXcqzlVVO321uxW7aTElajdvbYR66OJ5X8ssozcomDBkrXgJKpUPICLWskCq',
  },
};

axios
  .request(TBconfig)
  .then((response) => {
    console.log(Number(response.data.filter((el) => el.coin == 'BTC')[0].free));
    console.log(
      Number(response.data.filter((el) => el.coin == 'USDT')[0].free)
    );
  })
  .catch((error) => {
    console.log(error);
  });

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

  const modalClose = () => {
    overlay.remove();
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
      (((100 -
        ((parseInt(getComputedStyle(sliderContainer).width) / 100) * 7.5) /
          (parseInt(getComputedStyle(slide).width) / 100)) *
        parseInt(getComputedStyle(slide).width)) /
        100 /
        parseInt(getComputedStyle(sliderContainer).width)) *
      100
    }%`;
  } else {
    slide.style.left = `${
      (parseInt(getComputedStyle(slide.previousElementSibling).left) /
        parseInt(getComputedStyle(sliderContainer).width)) *
        100 +
      (parseInt(getComputedStyle(slide.previousElementSibling).width) /
        parseInt(getComputedStyle(sliderContainer).width)) *
        100 +
      7.5
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

firstSlide.style.left = `${
  (parseInt(getComputedStyle(firstSlide.nextElementSibling).left) /
    parseInt(getComputedStyle(sliderContainer).width)) *
    100 -
  (parseInt(getComputedStyle(slides[0]).width) /
    parseInt(getComputedStyle(sliderContainer).width)) *
    100 -
  7.5
}%`;

const lastSlide =
  sliderContainer.firstElementChild.nextElementSibling.cloneNode(true);

sliderContainer.append(lastSlide);
lastSlide.style.left = `${
  (parseInt(getComputedStyle(lastSlide.previousElementSibling).left) /
    parseInt(getComputedStyle(sliderContainer).width)) *
    100 +
  (parseInt(getComputedStyle(slides[0]).width) /
    parseInt(getComputedStyle(sliderContainer).width)) *
    100 +
  7.5
}%`;

let count = 0;
let stepCount = 0;
const steps = document.querySelector('.slider__steps');
for (let i = 0; i < sliderData.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('slider__dot');
  if (i == 0) {
    dot.classList.add('_active');
  }
  steps.append(dot);
}
const moveRight = () => {
  count = count + 110;
  stepCount++;
  const activeDot = steps.querySelector('._active');
  if (stepCount == steps.children.length) {
    activeDot.classList.remove('_active');
    steps.firstChild.classList.add('_active');
    stepCount = 0;
  } else {
    activeDot.nextElementSibling.classList.add('_active');
    activeDot.classList.remove('_active');
  }
  const activeSlide = document.querySelector('._activeSlide');
  for (let slide of slides) {
    slide.style.transform = `translateX(${count}%)`;
  }
  activeSlide.previousElementSibling.classList.add('_activeSlide');
  activeSlide.classList.remove('_activeSlide');
  const newSlide = activeSlide.cloneNode(true);
  sliderContainer.prepend(newSlide);
  newSlide.style.left = `${
    (parseInt(
      getComputedStyle(sliderContainer.firstElementChild.nextElementSibling)
        .left
    ) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 -
    (parseInt(getComputedStyle(slides[0]).width) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 -
    7.5
  }%`;
  sliderContainer.lastElementChild.remove();
};
const moveLeft = () => {
  count = count - 110;
  stepCount--;
  const activeDot = steps.querySelector('._active');
  if (stepCount == -1) {
    steps.lastElementChild.classList.add('_active');
    activeDot.classList.remove('_active');
    stepCount = sliderData.length - 1;
  } else {
    activeDot.previousElementSibling.classList.add('_active');
    activeDot.classList.remove('_active');
  }
  const activeSlide = document.querySelector('._activeSlide');
  for (let slide of slides) {
    slide.style.transform = `translateX(${count}%)`;
  }
  activeSlide.nextElementSibling.classList.add('_activeSlide');
  activeSlide.classList.remove('_activeSlide');
  const newSlide = activeSlide.cloneNode(true);
  sliderContainer.append(newSlide);
  newSlide.style.left = `${
    (parseInt(
      getComputedStyle(sliderContainer.lastElementChild.previousElementSibling)
        .left
    ) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 +
    (parseInt(getComputedStyle(slides[0]).width) /
      parseInt(getComputedStyle(sliderContainer).width)) *
      100 +
    7.5
  }%`;
  sliderContainer.firstElementChild.remove();
};
rBtn.addEventListener('click', moveRight);
lBtn.addEventListener('click', moveLeft);

//слайдер
//форма
const submitFormBtn = document.querySelector('.form__btn');
const submitForm = (event) => {
  event.preventDefault();
  const inputs = document.getElementsByTagName('input');
  const textArea = document.getElementsByTagName('textarea');
  const form = document.querySelector('form');

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length == 0 || textArea[0].value.length == 0) {
      textArea[0].classList.add('_form__error');
      textArea[0].placeholder = 'this area must be filled';
      inputs[i].classList.add('_form__error');
      inputs[i].placeholder = 'this area must be filled';
    } else {
      form.style.justifyContent = 'center';
      form.innerHTML =
        '<p class="contact-us-message"><span>Thanks!</span><br/> We are call you letter</p>';
    }
  }
};

submitFormBtn.addEventListener('click', submitForm);
//форма
//партнерс
const partners = document.querySelector('.partners__content');

async function getImg() {
  const url = await fetch(
    'https://jsonplaceholder.typicode.com/albums/1/photos'
  );
  const result = await url.json();
  for (let i = 0; i < 8; i++) {
    let imgUrl = result[i].url;
    const img = document.createElement('img');
    img.src = `${imgUrl}`;
    img.classList.add('partners__img');
    partners.prepend(img);
  }
}
getImg();
//партнерс
