const numberOne = +prompt('Введіть перше число');
const numberTwo = +prompt('Введіть друге число');

if (isNaN(numberOne) || isNaN(numberTwo)) {
	alert('Введіть будь ласка числа!');
} else {
	const sumNumbers = numberOne + numberTwo;
	const subtractingNumbers = numberOne - numberTwo;
	const multiplyingNumbers = numberOne * numberTwo;
	const dividingNumbers = numberOne / numberTwo;
	alert(`${sumNumbers}\n${subtractingNumbers}\n${multiplyingNumbers}\n${dividingNumbers}`);
}





