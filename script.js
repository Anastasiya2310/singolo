(function () {

  const MENU = document.getElementById('menu');
  const MENU_ITEM = MENU.querySelectorAll('li');
  const SLIDER = document.getElementById('slider');
  const PORTFOLIO_LIST = document.getElementById('portfolio-list');
  const TAGS = document.getElementById('tags');
  const SUBMIT = document.getElementById('button-submit');
  
  MENU.addEventListener('click', event => {
    MENU_ITEM.forEach(el => el.classList.remove('active'));
    event.target.parentElement.classList.add('active');
  });

  SLIDER.addEventListener('click', event => {
  	let phone = event.target.closest('.phone');
  	if (phone) {
  		phone.classList.toggle('switch-off');
  	}
  });

  PORTFOLIO_LIST.addEventListener('click', event => {
  	PORTFOLIO_LIST.querySelectorAll('li').forEach(el => el.classList.remove('active-work'));
  	event.target.parentElement.classList.add('active-work');
  });

	TAGS.addEventListener('click', event => {	
		let theFirstChild = PORTFOLIO_LIST.firstElementChild;
		let theLastChild = PORTFOLIO_LIST.lastElementChild;
		let portfolioItem = theFirstChild.nextElementSibling;
		let lastElemSibling2 = theLastChild.previousElementSibling.previousElementSibling;
		let lastElemSibling4 = theFirstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

		TAGS.querySelectorAll('li').forEach(el => el.classList.remove('active-tag'));
		event.target.parentElement.classList.add('active-tag');
		PORTFOLIO_LIST.insertBefore(portfolioItem, theFirstChild);
		PORTFOLIO_LIST.insertBefore(theLastChild, lastElemSibling2);
		PORTFOLIO_LIST.insertBefore(lastElemSibling4, lastElemSibling2);
	});

	SUBMIT.addEventListener('click', event => {
		event.preventDefault();
		document.getElementById('overflow').classList.remove('hidden');

		let subject = document.getElementById('subject-field').value;
		if(subject) {
			document.getElementById('subject').innerHTML="Тема: " + subject;
		} else {
			document.getElementById('subject').innerHTML= "Без темы";
		}

		let description = document.getElementById('description-field').value;
		if(description) {
			document.getElementById('description').innerHTML="Описание: " + description;
		} else {
			document.getElementById('description').innerHTML= "Без описания";
		}
	});

	document.getElementById('close-button').addEventListener('click', event => {
		document.getElementById('close-button').closest('#overflow').classList.add('hidden');
	});

	// slider 
	let slides = document.querySelectorAll('.slider-item');
	let activeItem = 0;
	let isEnabled = true;

	function changeActiveItem(n) {
		activeItem = (n + slides.length) % slides.length;
	}

	function hideItem(direction) {
		isEnabled = false;
		slides[activeItem].classList.add(direction);
		slides[activeItem].addEventListener('animationend', function(){
			this.classList.remove('visible', direction);
		});
	}

	function showItem(direction) {
		slides[activeItem].classList.add('next', direction);
		slides[activeItem].addEventListener('animationend', function(){
			this.classList.remove('next', direction);
			this.classList.add('visible');
			isEnabled = true;
		});
	}

	function previousItem(n) {
		hideItem('to-right');
		changeActiveItem(n - 1);
		showItem('from-left');
	}

	function nextItem(n) {
		hideItem('to-left');
		changeActiveItem(n + 1);
		showItem('from-right');
	}

	document.getElementById('previous').addEventListener('click', function() {
		if(isEnabled) {
			previousItem(activeItem);
		}
	});

	document.getElementById('next').addEventListener('click', function() {
		if(isEnabled) {
			nextItem(activeItem);
		}
	});

})();