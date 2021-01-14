const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click',() => {
    menu.classList.add('active');
});

close.addEventListener('click',() => {
    menu.classList.remove('active');
});


const num = document.querySelectorAll('.skills_item2-num'),
      lines = document.querySelectorAll('.skills_item2-bar span');

num.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});