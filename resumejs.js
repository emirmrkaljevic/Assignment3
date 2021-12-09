var Education = { Eduname: 'Education' };

const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add('active');
	} else {
		toTop.classList.remove('active');
	}
});

var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
	loader.style.display = 'none';
});

var modal = document.getElementById('prvimodalni');

var btn = document.getElementById('myBtn');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
	modal.style.display = 'block';
};

span.onclick = function() {
	modal.style.display = 'none';
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

$(document).ready(function() {
	$('#flip').click(function() {
		$('#panel').slideDown('slow');
	});
});

const languages = [ 'Bosnian', 'English', 'Turkish', 'German' ];
let jezici = '<ul>';
for (let i = 0; i < 4; i++) {
	jezici += '<li>' + languages[i] + '</li>';
}
jezici += '</ul>';

document.getElementById('jezici').innerHTML = jezici;

let element = document.getElementById('item');

switch (new Date().getDay()) {
	default:
		element.innerHTML = 'today is business day';
		break;
	case 6:
		element.innerHTML = 'today is saturday';
		break;
	case 0:
		element.innerHTML = 'today is sunday';
		break;
}
