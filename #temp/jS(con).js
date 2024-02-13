// https://learn.javascript.ru/ ====================================================================================================//

//*Числа =============================================================================================//
/*
let numOne = Math.floor(5.8);		Округлить вверх
let numOne = Math.ceil(5.8);		Округлить вниз
let numOne = Math.round(5.8); 	Округлить
Math.random()										Рандом
Math.max(5, 85, -49); 					Ищет максимум
Math.min(5, 85, -49); 					Ищет минимум
numOne.toFixed(1); 							кол-во знаков после запятой
Math.pow(5, 8);									Возвести в степень
let sourceNum = 1.005 + Number.EPSILON; Компенсировать погрешности
string.Number() 								Привести к числу. Или +"356"
Number.parseInt() 							вернет ЦЕЛОЕ число из строки до текста. В качастве аргумента - система исчисления!!!
Number.parseFloat() 						вернет число из строки до текста c цифрами после запятой. В качастве аргумента - система исчисления!!!
Number.isNaN()									проверка на NaN
Number.isInteger()							проверка на целое число
Number.isFinite(value)					преобразует аргумент в число и проверяет, что оно не является NaN/Infinity/-Infinity

Чтобы писать числа с большим количеством нулей:
Используйте краткую форму записи чисел – "e", с указанным количеством нулей.
Например: 123e6 это 123 с 6-ю нулями 123000000.
Отрицательное число после "e" приводит к делению числа на 1 с указанным количеством нулей.
Например: 123e-6 это 0.000123 (123 миллионных).

Для дробей:
Используйте округления Math.floor, Math.ceil, Math.trunc, Math.round или num.toFixed(precision).
Помните, что при работе с дробями происходит потеря точности.

*/
//* Строки =============================================================================================//
/*
string.lenght 										возвращает длину строки
string.charAt(5) 									возвращает символ под индексом 5
string.substring(5) 							возвращает c 5 символа и до конца string.substring(5, 10) 10- конец
string.slice(-10) 								возвращает как и substring, но может и с конца
string.substr(14, 4) 							возвращает как и substring, 4 - колличество символов
string.indexOf('word') 						ищет позицию слова или символы в строке
string.lastIndexOf('word') 				ищет позицию слова или символы в строке с конца
string.replace('word', 'another word') меняет строку (не перезаписывая) 'word' - что меняем, 'another word' - на что меняем. Только первое совпадение
string.replaceAll									меняет все совпадения
string.includes('ord') 						возвращает true or false
string.split(' ') 								принимает разделитель и разбивает строку на масив
arr.join(' ') 										создаёт строку из элементов arr, вставляя ' ' между ними
string.toUpperCase() 							приведение к верхнему регистру
string.toLowerCase() 							приведение к нижнему регистру
string[4] 												вернет 4 символnum.
toString 													Привести к строке. Или (345 + ""). В качастве аргумента - система исчисления!!!
'*'.repeat(4)											Повторить символ (4) раза
string.startsWith(str) 						проверяет начинается ли строка определённой строкой
string.endsWith(str)							проверяет заканчивается ли строка определённой строкой
string.trim()											обрезает пробелы (trimStart - в начале, trimEnd - в конце)
Boolean('string or expression')		приведение к булевому значению или !!('string or expression')

indexOf стоит использовать тогда когда нам нужна позиция найденой подстроки.
В остальных случаях удобнее использовать includes
Для получения символа используйте [] или метод at.
Для получения подстроки используйте slice или substring.
Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда надо только проверить, есть ли вхождение.
Чтобы сравнить строки с учётом правил языка, используйте localeCompare.

*/

//* Объекты =================================================================================================//

/*
Объекты – это ассоциативные массивы с рядом дополнительных возможностей.
Чтобы получить доступ к свойству, мы можем использовать:
Запись через точку: obj.property.
Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
Объекты присваиваются и копируются по ссылке.
Другими словами, переменная хранит не «значение объекта», а «ссылку» (адрес в памяти) на это значение.
Таким образом, копирование такой переменной или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.
Все операции с использованием скопированных ссылок (например, добавление/удаление свойств) выполняются с одним и тем же объектом.
Чтобы создать «реальную копию» (клон), мы можем использовать Object.assign для так называемой «поверхностной копии» 
(вложенные объекты копируются по ссылке) или функцию «глубокого клонирования», такую как _.cloneDeep(obj).

Object.hasOwnProperty								Возвращает true, только если данное свойство присутствует в объекте или его прототипе.
n ('age' in user)										Возвращает true, только если данное свойство присутствует в объекте или его прототипе.
JSON.stringify(Object)							Преобразовать в строку (не конвертирует значения undefined)
JSON.parse(String)									Преобразовать в объект
Object.keys(user)										Получить ключи в массив (первого уровня вложенности)
Object.values(user)									Получить значения в массив (первого уровня вложенности)
Object.entries(user)								Получить значения и ключи в массив масивов


Пройтись по ключам и вставить в переменную i  (for..in)
for (let i in user) {
	console.log(i)						ключ
	console.log(user[i])			значение
}

Вывести все ключи и значения циклом (Конвертировать объект в масив и работаем как с масивом)
const entries = Object.entries(user);
for (let i = 0; i < entries.length; i++) {
	const entry = entries[i];
	const key = entry[0];
	const value = entry[1];
	console.log(key, value);
}
*/

//* Массив ==================================================================================================//

{/*
	Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.

	Свойство length отражает длину массива или, если точнее, его последний цифровой индекс плюс один.
	Длина корректируется автоматически методами массива. Если мы уменьшаем length вручную, массив укорачивается.

	Получение элементов:
	Мы можем получить элемент по его индексу, например arr[0].
	Также мы можем использовать метод at(i) для получения элементов с отрицательным индексом, для отрицательных значений i, он отступает от конца массива.
	В остальном он работает так же, как arr[i], если i >= 0.

	//?Мы можем использовать массив как двустороннюю очередь, используя следующие операции:
	push(...items)												добавляет items в конец массива.
	pop()																	удаляет элемент в конце массива и возвращает его.
	unshift(...items)											добавляет items в начало массива.
	shift()																удаляет элемент в начале массива и возвращает его.

	splice(pos, deleteCount, ...items)		начиная с индекса pos удаляет deleteCount элементов и вставляет items.
	slice(start, end)											создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
	concat(...items)											возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. 
	Если какой-то из items является массивом, тогда берутся его элементы.

	//?Для поиска среди элементов:
	indexOf/lastIndexOf(item, pos)				ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
	includes(value)												возвращает true, если в массиве имеется элемент value, в противном случае false. Работает только для простых данных
	find/filter(func)											фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
	findIndex 														похож на find, но возвращает индекс вместо значения.

	//?Для перебора элементов:
	forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

	//?Чтобы пройтись по элементам массива:
	for (let i=0; i<arr.length; i++)			работает быстрее всего, совместим со старыми браузерами.
	for (let item of arr)									современный синтаксис только для значений элементов (к индексам нет доступа).
	for (let i in arr)										никогда не используйте для массивов!

	//?Для преобразования массива:
	map(func)															создаёт новый массив из результатов вызова func для каждого элемента.
	sort(func)														сортирует массив «на месте», а потом возвращает его.
	reverse()															«на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
	split(' ')														разбивает строку на массив по заданному разделителю (как split, только в другую сторону)
	reduce/reduceRight(func, initial)			вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
	arr.flat()														преобразует вложенные массивы в один. arr.flat(2) преобразовать вторую вложенность arr.flat(infinity)
	arr.reverse														разворачивает массив

	Дополнительно:
	Array.isArray(arr) проверяет, является ли arr массивом.
	Пожалуйста, обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

	arr.find()														Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined.
*/}
//* Типы данных=============================================================================================//

{/*
В JavaScript есть 8 основных типов данных.
Семь из них называют «примитивными» типами данных:

number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
bigint для целых чисел произвольной длины.
string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
symbol для уникальных идентификаторов.
object для более сложных структур данных, не является «примитивным» и стоит особняком

Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.
Имеет две формы: typeof x или typeof(x).
Возвращает строку с именем типа. Например, "string".
Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.
*/}

//* Преобразование типов ===================================================================================//

{/*
Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.

Строковое – Происходит, когда нам нужно что-то вывести. Может быть вызвано с помощью String(value).
Численное – Происходит в математических операциях. Может быть вызвано с помощью Number(value).

Преобразование подчиняется правилам:
Значение	Становится…
undefined	NaN
null	0
true / false	1 / 0
string	Пробельные символы по краям обрезаются.
Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число.
При ошибке результат NaN.

Логическое – Происходит в логических операциях. Может быть вызвано с помощью Boolean(value).
Подчиняется правилам:
Значение	Становится…
0, null, undefined, NaN, "" - false
любое другое значение - true

Большую часть из этих правил легко понять и запомнить. Особые случаи, в которых часто допускаются ошибки:
undefined при численном преобразовании становится NaN, не 0.
"0" и строки из одних пробелов типа " " при логическом преобразовании всегда true.
*/}

// todo ====================================================================================================//
// todo ====================================================================================================//

//* Условное ветвление: if, '?' ============================================================================//

{/*
Иногда нам нужно выполнить различные действия в зависимости от условий.
Для этого мы можем использовать инструкцию if и условный оператор ?

if (age < 3) {
  message = 'Здравствуй, малыш!';
} else if (age < 18) {
  message = 'Привет!';
} else if (age < 100) {
  message = 'Здравствуйте!';
} else {
  message = 'Какой необычный возраст!';
}

Оператор „?“

Синтаксис:
let result = условие ? значение1 : значение2;

let age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';
alert( message );

Первый знак вопроса проверяет age < 3.
Если верно – возвращает 'Здравствуй, малыш!'. В противном случае, проверяет выражение после двоеточия „:“, вычисляет age < 18.
Если это верно – возвращает 'Привет!'. В противном случае, проверяет выражение после следующего двоеточия „:“, вычисляет age < 100.
Если это верно – возвращает 'Здравствуйте!'. В противном случае, возвращает выражение после последнего двоеточия – 'Какой необычный возраст!'.
*/}


//! Циклы ====================================================================================================//

{
	//* Циклы while и for ======================================================================================//

	{/*
while – Проверяет условие перед каждой итерацией.
while (condition) {
  // код
  // также называемый "телом цикла"
}

do..while – Проверяет условие после каждой итерации.
do {
  // тело цикла
} while (condition);

for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.
Чтобы организовать бесконечный цикл, используют конструкцию while (true).
При этом он, как и любой другой цикл, может быть прерван директивой break.
for (начало; условие; шаг) {
  // ... тело цикла ...
}

Если на данной итерации цикла делать больше ничего не надо, но полностью прекращать цикл не следует – используют директиву continue.
Директива break полностью прекращает выполнение цикла и передаёт управление на строку за его телом.
Обе этих директивы поддерживают метки, которые ставятся перед циклом.

Метки – единственный способ для break/continue выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Заметим, что метки не позволяют прыгнуть в произвольное место кода, в JavaScript нет такой возможности.
*/}

	//* Цикл "for..in" =========================================================================================//

	{/*
Для перебора всех свойств объекта используется цикл for..in.

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}
*/}
}

//! Функции ================================================================================================//

{
	{/*
Объявление функции имеет вид:

function имя(параметры, через, запятую) {
  тело, код функции }

Параметр – это переменная, указанная в круглых скобках в объявлении функции.
Аргумент – это значение, которое передаётся функции при её вызове.

Передаваемые значения копируются в параметры функции и становятся локальными переменными.
Функции имеют доступ к внешним переменным.Но это работает только изнутри наружу.
Код вне функции не имеет доступа к её локальным переменным.
Функция может возвращать значение. Если этого не происходит, тогда результат равен undefined.
Для того, чтобы сделать код более чистым и понятным, рекомендуется использовать локальные переменные и параметры функций, не пользоваться внешними переменными.
Функция, которая получает параметры, работает с ними и затем возвращает результат, 
гораздо понятнее функции, вызываемой без параметров, но изменяющей внешние переменные, что чревато побочными эффектами.
*/}

	//* Function Expression ====================================================================================//

	{/*
Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
Если функция была создана как часть выражения, то это “Function Expression”.
Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.
В большинстве случаев, когда нам нужно объявить функцию, Function Declaration предпочтительнее, т.к функция будет видна до своего объявления в коде.
 Это даёт нам больше гибкости в организации кода, и, как правило, делает его более читабельным.
Исходя из этого, мы должны использовать Function Expression только тогда, когда Function Declaration не подходит для нашей задачи.
*/}

	//* Стрелочные функции ======================================================================================//

	{/*
Без фигурных скобок: (...args) => expression – правая сторона выражения: функция вычисляет его и возвращает результат.
Скобки можно не ставить, если аргумент только один

let sum = (a, b) => a + b;

С фигурными скобками: (...args) => { body } – скобки позволяют нам писать несколько инструкций внутри функции,
но при этом необходимо явно вызывать return, чтобы вернуть значение.

let sum = (a, b) => {
	let result = a + b;
	return result;
};
*/}
}

//todo  ====================================================================================================//
//todo  ====================================================================================================//

//! DOM ====================================================================================================//

{
	{/*
	
	//? Получить Узел =================//
	
	<html> = document.documentElement
	<head> = document.head
	<body> = document.body

	Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные ссылки.
	Есть два основных набора ссылок:

	Для всех узлов: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
	Проверить наличие узла: hasChildNodes (element.hasChildNodes())
	
	Только для узлов-элементов:
	parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

	Для childNodes методы массивов не работают, т.к. это коллекция (использовать for...of). Коллекции живые.
// Перебрать коллекцию: for..of ; forEach
		const elem = document.querySelectorAll('li')
		for (const item of elem) {
			console.log(item)
		}

//? Поиск =================//

	Есть 6 основных методов поиска элементов в DOM:
	Метод										Ищет по...		Ищет внутри элемента?	Возвращает живую коллекцию?
	querySelector						CSS-selector						✔												-
	querySelectorAll				CSS-selector						✔												-
	getElementById							id									-												-
	getElementsByName					name									-												✔
	getElementsByTagName		tag or '*'							✔												✔
	getElementsByClassName	class										✔												✔

	Безусловно, наиболее часто используемыми в настоящее время являются методы querySelector и querySelectorAll, 
	но и методы getElement(s)By* могут быть полезны в отдельных случаях, а также встречаются в старом коде.

	Кроме того:
	Есть метод elem.matches(css), который проверяет, удовлетворяет ли элемент CSS-селектору.Возвращает true или false
	Метод elem.closest(css) ищет ближайшего по иерархии предка, соответствующему данному CSS-селектору. Сам элемент также включён в поиск.
	elemA.contains(elemB) проверяет наличие отношений между предком и потомком: вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.
	
	//? Получить содержимое =================//
	
	innerHTML Внутреннее HTML-содержимое узла-элемента. Можно изменять.
	outerHTML Полный HTML узла-элемента. Запись в elem.outerHTML не меняет elem. Вместо этого она заменяет его во внешнем контексте.
	textContent Текст внутри элемента: HTML за вычетом всех <тегов>. Запись в него помещает текст в элемент, при этом все специальные символы и теги интерпретируются как текст. Можно использовать для защиты от вставки произвольного HTML кода.
	hidden Когда значение установлено в true, делает то же самое, что и CSS display:none. (elem.hidden = true)

	
	//? Методы для создания узлов: =================//
	
	document.createElement("tag") – создаёт элемент с заданным тегом,
	document.createTextNode(value) – создаёт текстовый узел (редко используется),
	elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

	Вставка и удаление:
	node.before(...nodes or strings) – вставляет прямо перед node,
	node.prepend(...nodes or strings) – вставляет в node в начало,
	node.append(...nodes or strings) – вставляет в node в конец,
	node.after(...nodes or strings) – вставляет сразу после node,
	node.replaceWith(...nodes or strings) – заменяет node.
	node.remove() – удаляет node.

	Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:
	"beforebegin" – вставляет html прямо перед elem,
	"afterbegin" – вставляет html в elem в начало,
	"beforeend" – вставляет html в elem в конец,
	"afterend" – вставляет html сразу после elem.
	Также существуют похожие методы elem.insertAdjacentText и elem.insertAdjacentElement, они вставляют текстовые строки и элементы, но они редко используются.

	//? Css =================//
	
	Для управления классами существуют два DOM-свойства:
	className – строковое значение, удобно для управления всем набором классов.
	classList – объект с методами add/remove/toggle/contains, удобно для управления отдельными классами.

	Чтобы изменить стили:
	Свойство style является объектом со стилями в формате camelCase.
	Чтение и запись в него работают так же, как изменение соответствующих свойств в атрибуте "style".
	Свойство style.cssText соответствует всему атрибуту "style", полной строке стилей.

	block.hidden = 'true'; Показать/Скрыть элемент

	Для чтения окончательных стилей (с учётом всех классов, после применения CSS и вычисления окончательных значений) используется:
	Метод getComputedStyle(elem, [pseudo]) возвращает объект, похожий по формату на style. Только для чтения.

	//? Атрибуты =================//

	hasAttribute('name') - Проверить наличие Атрибута
	getAttribute('name') - Получить значение Атрибута
	setAttribute('name', 'value') - Установить значение Атрибута
	removeAttribute('name') - Удалить Атрибут

	Все атрибуты, начинающиеся с префикса «data-», зарезервированы для использования программистами.
	Они доступны в свойстве dataset.
	Например, если у elem есть атрибут "data-about", то обратиться к нему можно как elem.dataset.about.
*/}

	//* Размеры и прокрутка окна ================================================================================//

	{/*
Размеры:
document.documentElement.clientWidth/Height - ширина/высота видимой части документа (ширина/высота области содержимого)
document.innerWidth - Ширина документа (с полосой прокрутки)
document.innerHeight - Высота документа (с полосой прокрутки)

Ширина/высота всего документа со всей прокручиваемой областью страницы:
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

Прокрутка:
Прокрутку окна можно получить так: window.pageYOffset/pageXOffset.

Изменить текущую прокрутку:
window.scrollTo(pageX,pageY) – абсолютные координаты,
window.scrollBy(x,y) – прокрутка относительно текущего места,
elem.scrollIntoView(top) – прокрутить страницу так, чтобы сделать elem видимым (выровнять относительно верхней/нижней части окна).
top или true - прокрутка к верхей части (по умолчанию)
false - прокрутка к нижней части
*/}

	//* Размеры, прокрутка элементов.Координаты =================================================================//

	{/*
У элементов есть следующие геометрические свойства (метрики):

offsetParent – ближайший CSS-позиционированный родитель или ближайший td, th, table, body.
offsetLeft/offsetTop – позиция в пикселях верхнего левого угла относительно offsetParent.
offsetWidth/offsetHeight – «внешняя» ширина/высота элемента, включая рамки.
clientLeft/clientTop – расстояние от верхнего левого внешнего угла до внутренного.
	Для операционных систем с ориентацией слева-направо эти свойства равны ширинам левой/верхней рамки.
	Если язык ОС таков, что ориентация справа налево, так что вертикальная полоса прокрутки находится не справа, а слева, то clientLeft включает в своё значение её ширину.
clientWidth/clientHeight – ширина/высота содержимого вместе с внутренними отступами padding, но без полосы прокрутки.
scrollWidth/scrollHeight – ширины/высота содержимого, аналогично clientWidth/Height, но учитывают прокрученную, невидимую область элемента.
scrollLeft/scrollTop – ширина/высота прокрученной сверху части элемента, считается от верхнего левого угла.
Все свойства доступны только для чтения, кроме scrollLeft/scrollTop, изменение которых заставляет браузер прокручивать элемент.

Любая точка на странице имеет координаты:
Относительно окна браузера – elem.getBoundingClientRect().
Относительно документа – elem.getBoundingClientRect() плюс текущая прокрутка страницы.
Координаты в контексте окна подходят для использования с position:fixed, а координаты относительно документа – для использования с position:absolute.
*/}
}

// todo ====================================================================================================//
// todo ====================================================================================================//

//! Браузерные события =====================================================================================//
{
	{/*
	Есть три способа назначения обработчиков событий:
	Атрибут HTML: onclick="...".
	DOM-свойство: elem.onclick = function.

Специальные методы: 
	elem.addEventListener(event, handler[, phase]) для добавления,removeEventListener для удаления.
	event - Имя события, например "click".
	handler - Ссылка на функцию-обработчик.
	options - Дополнительный объект со свойствами:
		once: если true, тогда обработчик будет автоматически удалён после выполнения.
		capture: фаза, на которой должен сработать обработчик, подробнее об этом будет рассказано в главе Всплытие и погружение. Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.
		passive: если true, то указывает, что обработчик никогда не вызовет preventDefault(), подробнее об этом будет рассказано в главе Действия браузера по умолчанию.

		element.addEventListener('click', addClass, { 'once': true }) // Выполнится только 1 раз

//?События мыши:
	click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
	contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
	mouseover / mouseout – когда мышь наводится на / покидает элемент.
	mouseenter / mouseleave - Как mouseover / mouseout, но пререходы внутри элемента на его потомков не считаются. mouseenter / mouseleave не всплывают!
	mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
	mousemove – при движении мыши.

	Координаты относительно окна: clientX/clientY. (event.clientX / event.clientY)
	Координаты относительно документа: pageX/pageY.

//?События клавиатуры:
	keydown - нажатие
	keyup - птпускание
	event.code; название клавиши
	event.key;  название клавиши с учетом регистра (g G) или языка

	Клавиши-модификаторы (true если нажаты): altKey, ctrlKey, shiftKey и metaKey (Mac).
	Если вы планируете обработать Ctrl, то не забудьте, что пользователи Mac обычно используют Cmd,
	поэтому лучше проверить if (e.metaKey || e.ctrlKey).

	автоповтор при зажатии клавиши event.repeat вернет true

//?Дрегие события:
	scroll - это событие, когда пользователь прокручивает страницу или элемент в любой плоскости
	DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен. Навешивается только на document
	load - как DOMContentLoaded, но после загрузки стилей.  Навешивается только на window
	submit – пользователь отправил форму <form>.
	focus – пользователь фокусируется на элементе, например нажимает на <input>.
	transitionend – когда CSS-анимация завершена.
*/}

	//* Всплытие и погружение ==================================================================================//

	{/*
При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (event.target).
Затем событие сначала двигается вниз от корня документа к event.target, по пути вызывая обработчики,
поставленные через addEventListener(...., true), где true – это сокращение для {capture: true}.
Далее обработчики вызываются на целевом элементе.
Далее событие двигается от event.target вверх к корню документа, по пути вызывая обработчики,
 поставленные через on<event> и addEventListener без третьего аргумента или с третьим аргументом равным false.

Каждый обработчик имеет доступ к свойствам события event:
event.target – самый глубокий элемент, на котором произошло событие.
event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)
event.eventPhase – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).

Любой обработчик может остановить событие вызовом event.stopPropagation(), но делать это не рекомендуется,
так как в дальнейшем это событие может понадобиться, иногда для самых неожиданных вещей.
*/}

	//* Деллегирование событий ==================================================================================//

	{/*
Алгоритм:
Вешаем обработчик на контейнер.
В обработчике проверяем исходный элемент event.target.
Если событие произошло внутри нужного нам элемента, то обрабатываем его.

Зачем использовать:
Упрощает процесс инициализации и экономит память: не нужно вешать много обработчиков.
Меньше кода: при добавлении и удалении элементов не нужно ставить или снимать обработчики.
Удобство изменений DOM: можно массово добавлять или удалять элементы путём изменения innerHTML и ему подобных.

Конечно, у делегирования событий есть свои ограничения:
Во-первых, событие должно всплывать. Некоторые события этого не делают.
Также, низкоуровневые обработчики не должны вызывать event.stopPropagation().
Во-вторых, делегирование создаёт дополнительную нагрузку на браузер, ведь обработчик запускается,
когда событие происходит в любом месте контейнера, не обязательно на элементах, которые нам интересны.
Но обычно эта нагрузка настолько пустяковая, что её даже не стоит принимать во внимание.
*/}
}