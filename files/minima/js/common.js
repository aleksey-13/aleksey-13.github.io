var wrapperMenu = document.querySelector('.wrapper-menu');
var menuSlide = document.querySelector('.slideMenu')

wrapperMenu.addEventListener('click', function(){
	wrapperMenu.classList.toggle('open');
	menuSlide.classList.toggle('menuS') ;
})