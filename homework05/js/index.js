document.addEventListener('DOMContentLoaded', function () {
	const textBlock = document.getElementById('text-block');
	const newElement = document.createElement('div');
	newElement.classList.add('new-element');

	function toggleVisibility(isVisible) {
		if (isVisible) {
			textBlock.insertAdjacentElement('afterend', newElement);
			newElement.classList.add('show');
			newElement.style.display = 'block';
		} else {
			newElement.classList.remove('show');
			newElement.style.display = 'none';
		}
	}

	textBlock.addEventListener('mouseenter', function () {
		toggleVisibility(true);
	});

	textBlock.addEventListener('mouseleave', function () {
		toggleVisibility(false);
	});
});

