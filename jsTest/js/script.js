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


//const user = {
//	name: 'alex',
//	age: 18,
//	state: 0,
//	family: {
//		dad: {
//			name: 'oldMan'
//		},
//		mom: {
//			name: 'oldWoman'
//		}
//	}
//}


//if (user.hasOwnProperty('name')) {
//	console.log('yes')
//} else {
//	console.log('no')
//}

//const newUser = JSON.stringify(user)
//console.log(typeof newUser)

//for (let i in user) {
//	let key = i;
//	let value = user[i];
//	console.log('Key: ' + key + ' Value: ' + value)
//}

//console.log(Object.keys(user.family))
//console.log(Object.values(user))
//console.log(Object.entries(user))

//const entries = Object.entries(user);

//for (let i = 0; i < entries.length; i++) {
//	const entry = entries[i];
//	const key = entry[0];
//	const value = entry[1];
//	console.log(key, value);
//}