const INCREASE_NUMBER_ANIMATION_SPEED = 25;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }

    i += 100;

    setTimeout(() => {
        increaseNumberAnimationStep(i, element, endNumber);    
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count');
    increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation();

const budgetEl = document.querySelector('#budget');

budgetEl.addEventListener('change', (e) => {

  if (e.target.value === 'other') {
    const formContainer = document.createElement('div');
    const formInputOther = document.createElement('input');

    formContainer.classList.add(...['form__group', 'form__input-other']);
    formInputOther.setAttribute('placeholder', 'Введите ваш вариант');
    formInputOther.setAttribute('type', 'text');
    formContainer.append(formInputOther);
    
    budgetEl.closest('.form__group').after(formContainer);
  }

  if (e.target.value !== 'other') {
    const formInputOther = document.querySelector('.form__input-other');
    if (formInputOther) {
      document.querySelector('.form form').removeChild(formInputOther);
    }
  }
});

function updateScroll() {
  let animationInited = false;

  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled');
  } else {
    document.querySelector('header').classList.remove('header__scrolled');
  }
 
  // Запуск анимации увеличения числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}
 
window.addEventListener('scroll', updateScroll);

/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelector('.header__controls button')
  .addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.form').scrollIntoView({
      behavior: 'smooth'
    })
  });

  document.querySelector('.about button')
  .addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.features').scrollIntoView({
      behavior: 'smooth'
    })
  });
  */

const scrollTo = (from, to) => {

  let fromEls = document.querySelectorAll(from);
  
  fromEls.forEach((fromEl) => {
    fromEl.addEventListener('click', (e) => {
      e.preventDefault();

      let toEl = document.querySelector(to);
      if (to === 'id') {
        toEl = document.querySelector(e.target.getAttribute('href'));
      }
      
      toEl.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};

scrollTo('a[href^="#"]', 'id');
scrollTo('.promo__button-wrap button', '.form');
scrollTo('.header__controls button', '.form');
scrollTo('.about button', '.features')
