/*
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