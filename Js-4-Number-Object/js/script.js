/* (https://doka.guide/tools/web-app-works/)
API (Application Programming Interface) — это набор фич, которые одна программа представляет всем остальным.
API может использоваться не только для общения браузера и сервера, но и в принципе для общения разных программ друг с другом.

REST (Representational State Transfer) — стиль общения компонентов, при котором все необходимые данные указываются в параметрах запроса.
REST сейчас — один из самых распространённых стилей API в интернете.
Всё взаимодействие между клиентом и сервером сводится к 4 операциям (CRUD):
	созданию чего-либо, например, объекта пользователя (create, C);
	чтению (read, R);
	обновлению (update, U);
	удалению (delete, D).

SOAP (Simple Object Access Protocol) — формат обмена данными.
Это структурированный формат обмена данными, то есть каждое сообщение следует определённой структуре.
Чаще всего вместе с SOAP используется XML для отражения этой структуры.
SOAP неважно, каким методом передавать сообщения, в отличие от REST.
Структура выглядит так:
	Envelope — корневой элемент, который определяет само сообщение.
	Header содержит атрибуты сообщения, например: информацию о безопасности.
	Body содержит сообщение, которым обмениваются приложения.
	Fault необязательный элемент с ошибками обработки, если они были.

AJAX (Asynchronous JavaScript and XML) — общение между клиентом и сервером без перезагрузки страницы.

MVC (Model-View-Controller) — структура приложения, в которой за данные, их обработку и их вывод отвечают три разных сущности.
Модель (model) отвечает за данные и их структуру.
Представление (view) — за их отображение.
Контроллер (controller) — за их обработку.

JSON — один из самых популярных форматов данных. Он немногословен, понятен и человеку, и компьютеру, много языков с ним уже умеют работать.
В вебе JSON, можно сказать, стандарт, потому что используется как формат по умолчанию во многих фреймворках.

fetch()
На уровне приложения мы используем встроенное браузерное API, а именно — fetch().
Это глобальный метод для отправки запросов.

const response = await fetch('/api/save-text', {
	method: 'POST',
	body: JSON.stringify(State),
})

Поле method — это так называемый HTTP-глагол.
HTTP-методы:
	POST для создания;
	GET для чтения;
	PUT обновляет объект целиком;
	DELETE для удаления.

HTTP (HyperText Transfer Protocol — протокол передачи гипертекста) работает с текстовыми сообщениями,
	которые пересылаются от клиента к серверу (HTTP-запрос) и обратно (HTTP-ответ).
Структура сообщения следующая:
	Стартовая строка (Starting line) говорит нам, запрос или ответ содержит сообщение;
	Заголовки (Headers) описывают тело сообщения, параметры передачи и прочие сведения;
	Тело сообщения (Message Body) содержит данные.
HTTP был разработан как протокол обмена данными между веб-сервером и веб-браузером.
Код состояния в ответе сервера содержит информацию о результате обработки данных.
Существует пять классов кодов состояний:

	1xx — обработка данных на сервере продолжается;
	2xx — успешная обработка данных;
	3xx — перенаправление запросов;
	4xx — ошибка по вине клиента;
	5xx — ошибка по вине сервера.


*/
/*
const newPost = {
	"userId": 10,
	"id": 777,
	"title": "Hello!",
	"body": "some text",
}

const test = JSON.stringify(newPost)
//console.log(test)


fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'GET',
	//body: test,
})
	.then((data) => {
		console.log(data)
		return data.json()
	}).then((info) => {
		console.log(info)
		for (let i = 0; i < info.length; i++) {
			console.log(info[i].body)
		}
	})
*/

//? get weather =================//
/* ( jsonplaceholder.typicode.com)
1. Сделать запрос на сайт погоды (open-meteo.com/en/docs)
	Получить данные и вывести их в документ
	(В Ярославле: -0.4 градусов Скорость ветра: 8 м/с Сейчас: День Атмосферное давление: 1010.1 Pa)
*/
const url = `https://api.open-meteo.com/v1/forecast?
	latitude=57.61&
	longitude=39.83&
	current=temperature_2m,is_day,surface_pressure,wind_speed_10m&hourly=
`;

fetch(url, {
	method: 'GET',
}).then((data) => {
	return data.json()
}).then((info) => {
	console.log(info)
	const current = info.current;
	renderWeather(current.temperature_2m, current.wind_speed_10m, current.is_day, current.surface_pressure)
})

function renderWeather(temp, speed, isDay, pressure) {
	const div = document.createElement('div');
	div.textContent = `В Ярославле: ${temp} градусов`;
	document.body.append(div);

	const div2 = document.createElement('div');
	div2.textContent = `Скорость ветра: ${speed} м/с`;
	document.body.append(div2);

	let day;
	if (isDay) {
		day = 'День'
	} else {
		day = 'Ночь'
	}
	const div3 = document.createElement('div');
	div3.textContent = `Сейчас: ${day}`;
	document.body.append(div3);

	const div4 = document.createElement('div')
	div4.textContent = `Атмосферное давление: ${pressure} Pa`
	document.body.append(div4)
}