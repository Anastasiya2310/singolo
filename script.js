  const MENU = document.getElementById('menu');
  const MENU_ITEM = MENU.querySelectorAll('li');
  const SLIDER = document.getElementById('slider');
  
  MENU.addEventListener('click', event => {
    MENU_ITEM.forEach(el => el.classList.remove('active'))
    event.target.parentElement.classList.add('active');
  });

  SLIDER.addEventListener('click', event => {
  	//SLIDER.getElementsByClassName('phone').forEach(el => el.classList.remove('switch-off'));
  	//event.target.classList.remove('switch-on');
  });