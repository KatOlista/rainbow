let userName;

const input = document.getElementsByTagName('input')[0];
const module = document.getElementsByClassName('module')[0];
const submitBtn = document.getElementsByClassName('submit')[0];
const hiMessage = document.getElementsByClassName('hi')[0];
const randomBtn = document.getElementsByClassName('random')[0];
const rainbowWrapper = document.getElementsByClassName('wrapper')[0];

submitBtn.addEventListener('click', () => {
	userName = input.value;
	module.classList.add('hide');
	if (!userName || userName === 'Необходимо ввести имя!') {
		module.classList.remove('hide');
		input.value = `Необходимо ввести имя!`;
		return;
	}
	hiMessage.textContent = `Сделай свой выбор, ${userName}!
	Внимание! У тебя 1 попытка`;
});

const freeColor = async function () {
	fetch('./base.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});

};

let checkColor = function () {
	rainbowWrapper.classList.add('rotate');
	const colorNumber = Math.random() * 100;

	freeColor();

	const color = colorNumber < 14.286 ? 'red' :
		colorNumber < 28.572 ? 'orange' :
			colorNumber < 42.858 ? 'yellow' :
				colorNumber < 57.144 ? 'green' :
					colorNumber < 71.43 ? 'blue' :
						colorNumber < 85.71 ? 'dark blue' : 'violet';

	hiMessage.textContent = `${userName}, твой цвет ...`;

	const infoColor = setInterval(() => {
		hiMessage.textContent = `${userName}, твой цвет ${color}`;
		clearInterval(infoColor);
	}, 3000);

	randomBtn.removeEventListener('click', checkColor);
}

randomBtn.addEventListener('click', checkColor);
