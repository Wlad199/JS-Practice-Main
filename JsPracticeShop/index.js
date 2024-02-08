
//* Tabs =================//

//const goods = document.querySelector('[data-tab-id = "goods"]')
//const cart = document.querySelector('[data-tab-id = "cart"]')

//goods.addEventListener('click', function clickHandler(event) {

//	if (event.target.dataset.tabId === 'goods')
//		goods.classList.add('active')
//	cart.classList.remove('active')
//})

//cart.addEventListener('click', function clickHandler(event) {

//	if (event.target.dataset.tabId === 'cart')
//		goods.classList.remove('active')
//	cart.classList.add('active')
//})

//? Tabs (Universal) =================//
/*
const buttonTabs = document.querySelector('.tabs')


if (buttonTabs) {
	buttonTabs.addEventListener('click', function (event) {

		const tabContent = document.querySelectorAll('[data-show-tab]')

		buttonTabs.querySelectorAll('button').forEach(function (i) {
			i.classList.remove('active')
		})

		if (event.target.closest('button')) {
			event.target.classList.add('active')
			if (event.target.dataset.tabId === 'goods') {

				document.querySelector('.cart-items').hidden = true
			}
		}
	})
}
*/

//? Original =========================//

const tabs = document.querySelectorAll('button.tab')
let activeTabId = 'goods';

// Добавляем изначальный класс
const initialTab = getActiveTab()
initialTab.classList.add('active')

// Показываем контент по клику на таб
renderTabContentId(activeTabId)

// Навешиваем события по клику
addClickListeners(tabs, clickHandler)

function clickHandler(event) {
	// Проверяем какой таб выбран, убраем класс, добавляем выбраному, получаем активный в конст
	const activeTab = getActiveTab()
	activeTab.classList.remove('active')
	event.target.classList.toggle('active')
	activeTabId = event.target.dataset.tabId;

	// Удаляем активный контент
	removeActiveTabContent()

	// Показываем выбранный контент
	renderTabContentId(activeTabId)
}

function getActiveTab() {
	return document.querySelector(`button[data-tab-id="${activeTabId}"]`)
}

function removeActiveTabContent() {
	const activeContent = document.querySelector(
		`[data-active-tab-content='true']`
	)
	activeContent.remove()
}

function renderGoods() {

	// Создаем новый див и добав. ему аттрибуты и классы
	const div = document.createElement('div');
	div.dataset.activeTabContent = 'true';
	div.className = 'product-items';

	// Проходимся циклом по массиву и получаем в константу product каждый товар
	for (let i = 0; i < GOODS.length; i++) {
		const product = GOODS[i];

		// Заполняем див данными из масива
		div.insertAdjacentHTML('beforeend', `
			<div class="product-item">
					<img src="${product.imgSrc}">
				<div class="product-list">
					<h3>${product.name}</h3>
					<p class="price">₽ ${product.price}</p>
					<button data-add-in-cart='true' class="button">В корзину</button>
				</div>
			</div>
		`)
	}

	return div;
}

function renderCart() {
	return `
		<div data-active-tab-content='true' data-show-tab class="cart-items">
		<div class="cart-item">
				<div class="cart-item-title">Уроки по HTML</div>
				<div class="cart-item-count">3шт.</div>
				<div class="cart-item-price">₽ 150</div>
		</div>

		<div class="cart-item">
				<div class="cart-item-title">Уроки по CSS</div>
				<div class="cart-item-count">1шт.</div>
				<div class="cart-item-price">₽ 450</div>
		</div>

		<div class="cart-item">
				<div class="cart-item-title">Уроки по JS</div>
				<div class="cart-item-count">6шт.</div>
				<div class="cart-item-price">₽ 550</div>
		</div>
	</div>
	`
}

// Вставляем HTML исходя из активной табы
function renderTabContentId(tabId) {
	const tabsContainer = document.querySelector('.tabs')

	if (tabId === 'goods') {
		const html = renderGoods()
		tabsContainer.after(html)
	} else {
		const html = renderCart()
		tabsContainer.insertAdjacentHTML("afterend", html)
	}
}

//? Товаты в корзине =================//

const goodsInCart = [];
const addInCartButtons = document.querySelectorAll('button[data-add-in-cart="true"]')
// Счетчик товара в корзине (выводится через псевдоэлемент attr в css)
const tabWithCounter = document.querySelector('button[data-goods-count]')

// Навешиваем события по клику
addClickListeners(addInCartButtons, addInCartHandler)

// При нажатии по кнопке добав. товар в корзину и увелич. счетчик
function addInCartHandler() {
	const product = createProduct()
	goodsInCart.push(product)
	tabWithCounter.dataset.goodsCount = goodsInCart.length
}

// Общая функция для отслеживания кликов
function addClickListeners(elements, callback) {
	for (i = 0; i < elements.length; i++) {
		const element = elements[i]
		element.addEventListener('click', callback)
	}
}

function createProduct() {
	return {
		name: 'Уроки по HTML',
		price: 500,
	}
}


//?  =================//


//console.log(GOODS)