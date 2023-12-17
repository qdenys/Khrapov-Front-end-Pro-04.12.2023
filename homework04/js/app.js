function getUserInfo() {
	const birthYearInput = prompt('Введіть ваш рік народження:');

	if (!birthYearInput) {
		alert('Шкода що Ви не захотіли ввести свій рік народження');
		return;
	}

	const birthYear = birthYearInput;
	if (isNaN(birthYear)) {
		alert('Почніть заново, та введіть коректні дані.');
		return;
	}
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;
	const city = prompt('В якому місті ви живете?');


	if (!city) {
		alert('Шкода, що Ви не захотіли ввести назву міста.');
		return;
	}

	const capitals = {
		'Київ': 'України',
		'Вашингтон': 'Сполучених Штатах Америки',
		'Лондон': 'Великобританії'
	}
	let messageCity = `Ти живеш у місті ${city}`;
	if (capitals[city]) {
		messageCity = `Ти живеш у столиці  ${capitals[city]}`;
	}


	const sport = prompt('Який ваш улюблений вид спорту?');

	if (!sport) {
		alert('Шкода, що Ви не захотіли ввести ваш улюблений вид спорту.');
		return;
	}
	let messageSport;

	if (sport.toLowerCase() === 'футбол') {
		messageSport = `Круто! Хочеш стати як Михайло Мудрик?`
	} else if (sport.toLowerCase() === 'баскетбол') {
		messageSport = `Круто! Хочеш стати як Майкл Джордан?`
	} else if (sport.toLowerCase() === 'бокс') {
		messageSport = `Круто! Хочеш стати як Александр Усик?`
	} else {
		messageSport = `Круто, твій улюблений спорт це ${sport}`
	}


	alert(`Ваш вік: ${age}\n ${messageCity}\n ${messageSport}`);
}

getUserInfo();



