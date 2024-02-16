/*
1. Числа
	Округлить в большую, меньшую сторону и до целого
	Округлить до 3 знаков после запятой
	Перевести строку в число
	Вывести тип данных
	Перевести строку 9.99px в число, отбросив буквы с сохранением знаков после запятой и без
	Возвести число в степень через Math и *
	Проверить на NaN
	Проверить на целое число
	Получить рандомное число, округлить.
	Получить рандомное число от 1 до 10

2. Строки
	Перевести число в строку
	Получить длину строки
	Привести к верхнему и нижнему регистру
	Привести нижнему регистру и сделать первую букву заглавной
	Сделать равенство верным "PassWord" === "password"
	Вывести символ "*" 6 раз с помтщью repeat
	Проверить на наличие символа (-), (s), (S) в const someString = 'There is - something stting' С помощью indexOf & lastIndexOf
	Вывести символ под номером 5 в строке charAt
	Проверить на наличие символа (.com) https://neprivet.com/ через ncludes
	Проверить начинается ли строка с символа (startsWith) и заканчивается (endsWith)
	Обрезать строку (   someText    ) с помощью slice и сравнить со строкой someText
	Обрезать пробелы (   someText    )
	Убрать тирэ и () из номера (8(800)555-35-35). nomber.replaceAll().replaceAll()

3.Объект
	const user = {name: 'alex',age: 18,}
	Найти name в user с помощью in. Сделать условие и вывести в консоль
	Переписать на hasOwnProperty
	Преобразовать в строку
	Преобразовать в объект
	Вывести ключи и свойства (for..in)
	Получить ключи в массив (Object.keys)
	Получить значения в массив (Object.values)
	Получить значения и ключи в массив
	Вывести все ключи и значения циклом

	const user = {
	name: 'alex',
	age: 18,
	state: 0,
	family: {
		dad: {
			name: 'oldMan'
		},
		mom: {
			name: 'oldWoman'
		}
	}
}

/  =================//
	Создать функцию, в которую можно передать название объекта и получить
 У {user.name + user.surname} {family.length} член(-а/-ов) семьи.
 Отец - {dad.name + dad.surname} (возраст не известен).
 Мать - {mom.name + mom.surname} (возраст не известен).
 Брат - {brother.name + brother.surname} ({brother.age} лет).
 Если каких то членов семьи нет, то не выводить

const userInformation = {
	name: 'Иван',
	surname: 'Иванов',
	age: 15,
	family: {
			dad: {
					name: 'Александр',
					surname: 'Иванов',
					age: undefined,
			},
				mom: {
					name: 'Наталья',
					surname: 'Иванова',
			},
				brother: {
					name: 'Константин',
					surname: 'Иванов',
					age: '10',
			},
			sister: {
					name: 'Константин',
					surname: 'Иванов',
					age: '10',
			},
	}
}
*/

/*

const user = {
	name: 'alex',
	age: 18,
	state: 0,
	family: {
		dad: {
			name: 'oldMan'
		},
		mom: {
			name: 'oldWoman'
		}
	}
}

if (user.hasOwnProperty('name')) {
	console.log('yes')
} else {
	console.log('no')
}

const newUser = JSON.stringify(user)
console.log(typeof newUser)

for (let i in user) {
	let key = i;
	let value = user[i];
	console.log('Key: ' + key + ' Value: ' + value)
}

console.log(Object.keys(user.family))
console.log(Object.values(user))
console.log(Object.entries(user))

const entries = Object.entries(user);

for (let i = 0; i < entries.length; i++) {
	const entry = entries[i];
	const key = entry[0];
	const value = entry[1];
	console.log(key, value);
}
*/

//Создать функцию, в которую можно передать название объекта и получить
//У {user.name + user.surname} {family.length} член(-а/-ов) семьи.
//Отец - {dad.name + dad.surname} (возраст не известен).
//Мать - {mom.name + mom.surname} (возраст не известен).
//Брат - {brother.name + brother.surname} ({brother.age} лет).
//Если каких то членов семьи нет, то не выводить
/*
const userInformation = {
	name: 'Иван',
	surname: 'Иванов',
	age: 15,
	family: {
		dad: {
			name: 'Александр',
			surname: 'Иванов',
			age: undefined,
		},
		mom: {
			name: 'Наталья',
			surname: 'Иванова',
		},
		brother: {
			name: 'Константин',
			surname: 'Иванов',
			age: '10',
		},
		sister: {
			name: 'Анастасия',
			surname: 'Иванова',
			age: 20,
		},
	}
}

const listOfFamily = {
	dad: 'Отец',
	mom: 'Мать',
	brother: 'Брат',
	//sister: 'Сестра',
}

function showInfo(user) {

	let str = `У ${user.name} ${user.surname}`;
	let family = ''
	let sizeOfFamily = ''

	// Через for in получаем ключи объекта
	for (let familyMember in user.family) {

		const data = user.family[familyMember];
		const memeber = listOfFamily[familyMember];

		if (memeber) {
			family += ` ${memeber} - ${data.name} ${data.surname}`
			sizeOfFamily++
		} else {
			console.warn(`Добавьте ${familyMember} в словарь`);
		}

		if (
			typeof data.age === 'number' ||
			typeof data.age === 'string'
		) {
			family += ` (${data.age} лет)`
		} else {
			family += ` (возраст неизвестен)`
		}
	}

	str += ` ${sizeOfFamily} членов семьи ${family}`

	return str
}

const data = showInfo(userInformation)
console.log(data)

*/
/*

4. Массивы

	Создать массив
	Добавить/удалить жлементы в начало/конец (строки, булевые, числа, объекты)
	Проверить на тип массива
	Сложить массивы (concat)
	Проверить начичие элемента внутри
	Разбить строку на масив и обратно
	Создать массив с вложенными массивами и преобразовать в однородный (2 вложенность)
	Развернуть массив
	Отсортировать массив
	Обрезать (splice), (slice)
	Пройтись forEach
	Преобразовать массив с помощью map (Добавить префикс), (массив длтн) Переписать под цикл

	/  =================//

	Из исходного массива получить массив имён
	Отфильтровать массив по возрасту больше 18 лет. Переписать под тернарный оператор
	Отфильтровать массив по имени Nick (find)
		const myArray = [{
			name: 'Alex',
			age: '26',
		}, {
			name: 'Nick',
			age: '17',
		}, {
			name: 'Rick',
			age: '19',
		},]

/  =================//

	Отфильтровать массив по элементам, начинающимся с 'J'
	const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

/  =================//

	Вывести только объект в новый массив (find).
	Сделать проверку на наличие объекта в массиве (some) (includes)
	const myArray = [1, 2, '5', true, { name: 'Alex' }]

/  =================//

	Посчитать сумму с помощью for, forEach, reduce
	Получить ['1', '2', '3', '4', '5', '6', '7']

		const myArray = [1, 2, 3, 4, 5, 6, 7]

/  =================//

	Получить строку из масива (reduce)
	Получить: {Orange: 'Orange', Apple: 'Apple', Banana: 'Banana'}
						{name-Orange: 'Orange', name-Apple: 'Apple', name-Banana: 'Banana'}

	const test = ['Orange', 'Apple', 'Banana']

/  =================//

	Сделать однородный массив (через reduce, forEach) (как concat)
	Склеить в 1 строку
	const test = [['Orange'], ['Apple'], ['Banana']]

/  =================//


 Задача №1 (подсказка в файле help.txt)
		const fromYou = 'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css';
		Решение в файле dz.js
		'#lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css';

/  =================//

 Вывести только новости с больше 100 лайков (Использовать ?)
 Найти людей, которые ее написали.
 Вывести в виде объекта { id: 2, title: 'Важная новость'}
	const data = [{
		id: 1,
		title: 'Новость дня',
		author: 'Alex',
		likes: 50
	}, {
		id: 2,
		title: 'Важная новость',
		author: 'Anna',
		likes: 150
	}, {
		id: 3,
		title: 'Важная новость #2',
		author: 'John',
		likes: 140
	},]

/  =================//

 2. [1,2,3,4,5] => 15 (forEach, reduce)

 3. ['my', 'name', 'is', 'Alex'] => 'my name is Alex'

 4. (includes/find/some/filter)
			const badAge = 20;
		[15, 10, 20, 30] - тут есть badAge? true/false

 5.
	Вывести пользователей (только имена) > 18 лет. (forEach/filter+map)

	[{
			name: 'Alex',
			age: 20,
	}, {
			name: 'Anna',
			age: 30,
	}, {
			name: 'John',
			age: 10
	}]
	*/


//  ====================================================================================================//



//const test = [
//	['Orange'],
//	['Apple'],
//	['Banana']
//]

//const test2 = [];

//test.forEach((elem) => {
//	test2.push(elem[0]);
//})

//const test2 = test.reduce((acc, elem) => {
//	acc.push(elem[0])
//	return acc
//}, [])


//console.log(test2)