  const MENU = document.getElementById('menu');
  const MENU_ITEM = MENU.querySelectorAll('li');
  const SLIDER_VERTICAL = document.getElementById('phone-vertical');
  const SLIDER_HORIZONTAL = document.getElementById('phone-horizontal');
  
  MENU.addEventListener('click', event => {
    MENU_ITEM.forEach(el => el.classList.remove('active'));
    event.target.parentElement.classList.add('active');
  });

  SLIDER_VERTICAL.addEventListener('click', event => {
  	event.target.classList.toggle('switch-off');
  });

  SLIDER_HORIZONTAL.addEventListener('click', event => {
  	event.target.classList.toggle('switch-off');
  });