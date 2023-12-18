document.addEventListener('DOMContentLoaded', function () {
	const textBlock = document.getElementById('text-block');
	const newElement = document.createElement('div');
	newElement.classList.add('new-element');

	textBlock.addEventListener('mouseenter', function () {
		textBlock.insertAdjacentElement('afterend', newElement);
		newElement.classList.add('show');
		newElement.style.display = 'block';

	});

	textBlock.addEventListener('mouseleave', function () {
		newElement.classList.remove('show');
		newElement.style.display = 'none';
	});
});
