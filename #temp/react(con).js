/*
1 .Install NODE
2. Install CRA (Create React APP)
	(npx create-react-app my-app)
3. Запустить CRA.
	npm run start (build)
4. Создать, если надо package.json
	npm init
5. Установить зависимости (node modules)
	npm i (npm install)
6. Устанавливать библиотеки:
	Например: npm i hello-world-npm
	Или вручную добавить в package.json и npm i
	С выбором версии npm i hello-world-npm@1.1.1
	С точным выбором версии (без ^) npm i hello-world-npm@1.1.1 -Е
	С установить в devDependencies npm i hello-world-npm -D (или: --save-dev)
	Установить глобально: -g (лучше через npx)
 Удалить: npm un ... (uninstall)



Внутри jsx можно использ. только map или reduce (filter только с последующей конвертацией в react)
	т.к. они возвращают результат. За пределами jsx можно испозьз. что угодно.

Вместо class используется className
Подключение стилей: import './style.css';

Если внутри jsx использ Map() то елементам массива нужен уникалтный ключ key={}
В случае если исходный массив точно не будет меняться - то можно использ второй аргумент ф-ции Map - index: Map((user, index)=>...)
В случае если ключи в массиве уникальны - можно использ их
В остальных случаях лучше генерировать ключи самостоятельно на основе данных



*/

/*
import/export
jsx
class
*/




/*
REACT 10
const USERS = [
	{ name: 'Alex', age: 18, id: 562 },
	{ name: 'John', age: 58, id: 552 },
	{ name: 'Bob', age: 15, id: 592 },
	{ name: 'Bob', age: 11, id: 762 },
]
1. Для массива вывести имена пользователей в документ
2. Создать уникальные ключи:
	через имена
	через Map(), используя index
	Написать функцию, генерирующую уникальные ключи (Alex_18_562)

*/