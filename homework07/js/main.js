document.addEventListener('DOMContentLoaded', documentOnReady);

function documentOnReady() {
	// Функція динамічно створення порожньої таблиці

	function createEmptyTable() {
		let table = '<table>';

		for (let i = 0; i < 10; i++) {
			table += '<tr>';
			for (let j = 0; j < 10; j++) {
				table += '<td></td>';
			}
			table += '</tr>';
		}

		table += '</table>';
		return table;
	}

	document.getElementById('table-container').innerHTML = createEmptyTable();

	//Функція додавання чисел з інтервалом
	function fillTableWithNumbers() {
		let number = 1;
		const cells = document.querySelectorAll('#table-container td');
		let index = 0;

		const intervalId = setInterval(() => {
			if (index < cells.length) {
				cells[index].innerHTML = number++;
				index++;
			} else {
				clearInterval(intervalId);
			}
		}, 50);
	}

	fillTableWithNumbers();
}

