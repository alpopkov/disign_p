document.addEventListener('DOMContentLoaded', function () {

	var modalButtons = document.querySelectorAll('.header__btn'),
		overlay = document.querySelector('.js-overlay-modal'),
		closeButtons = document.querySelectorAll('.rightside-menu__close');

	modalButtons.forEach(function (item) {

		item.addEventListener('click', function (e) {

			e.preventDefault();

			var modalId = this.getAttribute('data-modal'),
				modalElem = document.querySelector('.rightside-menu[data-modal="' + modalId + '"]');

			modalElem.classList.add('active');
			overlay.classList.add('active');
		});
	});


	closeButtons.forEach(function (item) {

		item.addEventListener('click', function (e) {
			var parentModal = this.closest('.rightside-menu');

			parentModal.classList.remove('active');
			overlay.classList.remove('active');
		});
	});

	document.body.addEventListener('keyup', function (e) {
		var key = e.keyCode;

		if (key == 27) {

			document.querySelector('.rightside-menu.active').classList.remove('active');
			document.querySelector('.overlay').classList.remove('active');
		};
	}, false);

	overlay.addEventListener('click', function () {
		document.querySelector('.rightside-menu.active').classList.remove('active');
		this.classList.remove('active');
	});
});




function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

