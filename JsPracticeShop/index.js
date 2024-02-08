
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
for (let i = 0; i < tabs.length; i++) {
	const tab = tabs[i]
	tab.addEventListener('click', clickHandler)
}

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
	return `
		<div data-active-tab-content='true' data-show-tab class="product-items">
		<div class="product-item">
				<img src="goods/html.png">
			<div class="product-list">
					<h3>Уроки по HTML</h3>
						<p class="price">₽ 300</p>
						<button class="button">В корзину</button>
			</div>
		</div>

		<div class="product-item">
				<img src="goods/css.png">
			<div class="product-list">
					<h3>Уроки по CSS</h3>
						<p class="price">₽ 150</p>
						<button class="button">В корзину</button>
			</div>
		</div>

		<div class="product-item">
				<img src="goods/js.png">
			<div class="product-list">
					<h3>Уроки по JS</h3>
						<p class="price">₽ 260</p>
						<button class="button">В корзину</button>
			</div>
		</div>
	</div>
	`
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
	let html = '';

	if (tabId === 'goods') {
		html = renderGoods()
	} else {
		html = renderCart()
	}
	tabsContainer.insertAdjacentHTML("afterend", html)
}