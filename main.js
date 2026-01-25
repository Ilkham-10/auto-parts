const d = new Date("December 5, 2025 12:25:00");
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;


const buttons = document.querySelectorAll('.nav-bar button');
const sections = document.querySelectorAll('.content-section');

buttons.forEach(btn => {
        btn.addEventListener('click', () => {
        // Удаляем active у всех секций
        sections.forEach(s => s.classList.remove('active'));
        // Добавляем active тому, чей id совпадает с текстом кнопки
        const targetSection = document.getElementById(btn.textContent);
        if(targetSection) targetSection.classList.add('active');
        // Скроллим наверх для удобства
        window.scrollTo({top: 0, behavior: 'smooth'});
        });
    });



document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
        link.style.animation = 'grow 0.3s ease';
        });
        link.addEventListener('mouseleave', () => {
        link.style.animation = '';
        });
    });
    });


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[data-target]');
    const contentContainer = document.getElementById('content-container');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем переход по ссылке
        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

        // Скрываем все блоки контента
        document.querySelectorAll('.content-block').forEach(block => {
            block.style.display = 'none';
        });

        // Показываем выбранный блок
        targetContent.style.display = 'block';
        contentContainer.appendChild(targetContent);
        });
    });
    });

// Открываем модальное окно при клике на кнопку
    document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal-registration').style.display = 'block';
    });

    // Закрываем модальное окно при клике вне его или на кнопку закрытия
    window.onclick = function(event) {
    if (event.target == document.getElementById('modal-registration')) {
        document.getElementById('modal-registration').style.display = 'none';
    }
    };

    // Дополнительно: можно добавить кнопку закрытия внутри модального окна
    document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal-registration').style.display = 'none';
    });

    
document.addEventListener('DOMContentLoaded', function() {
    // Данные о товарах (мок-данные)
    const productsData = [
        {
            id: 1,
            name: "Двигатель V8",
            category: "cars",
            description: "Мощный двигатель для легковых автомобилей",
            price: 150000,
            image: "https://placehold.co/300x200/4F46E5/FFFFFF?text=Двигатель+V8"
        },
        {
            id: 2,
            name: "Двигатель для трактора",
            category: "tractors",
            description: "Надежный двигатель для сельскохозяйственной техники",
            price: 250000,
            image: "https://placehold.co/300x200/10B981/FFFFFF?text=Двигатель+трактора"
        },
        {
            id: 3,
            name: "Мотоциклетный двигатель",
            category: "motorcycles",
            description: "Компактный и мощный двигатель для мотоциклов",
            price: 95000,
            image: "https://placehold.co/300x200/F59E0B/FFFFFF?text=Мотоциклетный+двигатель"
        },
        {
            id: 4,
            name: "Тормозные колодки",
            category: "cars",
            description: "Высококачественные тормозные колодки",
            price: 2500,
            image: "https://placehold.co/300x200/EF4444/FFFFFF?text=Тормозные+колодки"
        },
        {
            id: 5,
            name: "Масляный фильтр",
            category: "cars",
            description: "Фильтр для очистки моторного масла",
            price: 850,
            image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Масляный+фильтр"
        },
        {
            id: 6,
            name: "Свечи зажигания",
            category: "cars",
            description: "Свечи для надежного зажигания",
            price: 1200,
            image: "https://placehold.co/300x200/059669/FFFFFF?text=Свечи+зажигания"
        },
        {
            id: 7,
            name: "Фильтр воздушный",
            category: "cars",
            description: "Фильтр для очистки воздуха",
            price: 1800,
            image: "https://placehold.co/300x200/EF4444/FFFFFF?text=Воздушный+фильтр"
        },
        {
            id: 8,
            name: "Амортизатор передний",
            category: "cars",
            description: "Передний амортизатор для комфортной езды",
            price: 4500,
            image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Амортизатор"
        },
        {
            id: 9,
            name: "Цепь ГРМ",
            category: "cars",
            description: "Высококачественная цепь ГРМ",
            price: 3200,
            image: "https://placehold.co/300x200/059669/FFFFFF?text=Цепь+ГРМ"
        },
        {
            id: 10,
            name: "Шины летние",
            category: "cars",
            description: "Летние шины для всех типов дорог",
            price: 8500,
            image: "https://placehold.co/300x200/1F2937/FFFFFF?text=Летние+шины"
        },
        {
            id: 11,
            name: "Аккумулятор",
            category: "cars",
            description: "Высокомощный автомобильный аккумулятор",
            price: 6800,
            image: "https://placehold.co/300x200/DC2626/FFFFFF?text=Аккумулятор"
        },
        {
            id: 12,
            name: "Масло моторное",
            category: "cars",
            description: "Синтетическое моторное масло",
            price: 1500,
            image: "https://placehold.co/300x200/6B7280/FFFFFF?text=Моторное+масло"
        },
        {
            id: 13,
            name: "Радиатор охлаждения",
            category: "cars",
            description: "Радиатор для эффективного охлаждения",
            price: 5200,
            image: "https://placehold.co/300x200/0EA5E9/FFFFFF?text=Радиатор"
        },
        {
            id: 14,
            name: "Тормозные диски",
            category: "cars",
            description: "Высококачественные тормозные диски",
            price: 3800,
            image: "https://placehold.co/300x200/7C3AED/FFFFFF?text=Тормозные+диски"
        },
        {
            id: 15,
            name: "Помпа",
            category: "cars",
            description: "Насос охлаждающей жидкости",
            price: 2900,
            image: "https://placehold.co/300x200/F59E0B/FFFFFF?text=Помпа"
        }
    ];

    // Элементы DOM
    const searchInput = document.getElementById('search-input');
    const categoryToggle = document.getElementById('category-toggle');
    const categoryMenu = document.getElementById('category-menu');
    const searchBtn = document.getElementById('search-btn');
    const productsGrid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    const resultsTitle = document.getElementById('results-title');
    const resultsCount = document.getElementById('results-count');

    // Состояние фильтров
    let selectedCategory = 'all';
    let searchQuery = '';

    // Инициализация
    renderProducts(productsData);
    setupEventListeners();

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Клик по кнопке фильтра
        categoryToggle.addEventListener('click', function() {
            categoryMenu.style.display = categoryMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Выбор категории
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function() {
                selectedCategory = this.dataset.value;
                categoryToggle.textContent = this.textContent;
                categoryMenu.style.display = 'none';
                applyFilters();
            });
        });

        // Клик по кнопке поиска
        searchBtn.addEventListener('click', function() {
            searchQuery = searchInput.value.trim();
            applyFilters();
        });

        // Поиск при нажатии Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchQuery = searchInput.value.trim();
                applyFilters();
            }
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!categoryToggle.contains(e.target) && !categoryMenu.contains(e.target)) {
                categoryMenu.style.display = 'none';
            }
        });
    }

    // Применение фильтров
    function applyFilters() {
        let filteredProducts = [...productsData];
        
        // Фильтрация по категории
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }
        
        // Фильтрация по поисковому запросу
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query)
            );
        }
        
        // Обновление заголовка и количества результатов
        updateResultsHeader(searchQuery, selectedCategory, filteredProducts.length);
        
        // Отображение результатов
        renderProducts(filteredProducts);
    }

    // Обновление заголовка результатов
    function updateResultsHeader(query, category, count) {
        let title = '';
        
        if (query && category === 'all') {
            title = `Результаты поиска: "${query}"`;
        } else if (query && category !== 'all') {
            const categoryText = document.querySelector(`.dropdown-item[data-value="${category}"]`).textContent;
            title = `Результаты поиска: "${query}" (${categoryText})`;
        } else if (!query && category !== 'all') {
            const categoryText = document.querySelector(`.dropdown-item[data-value="${category}"]`).textContent;
            title = `${categoryText}`;
        } else {
            title = 'Все автозапчасти';
        }
        
        resultsTitle.textContent = title;
        resultsCount.textContent = `${count} товаров`;
    }

    // Отрисовка товаров
    function renderProducts(products) {
        productsGrid.innerHTML = '';
        
        if (products.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const categoryText = getCategoryText(product.category);
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-category">${categoryText}</div>
                <h4 class="product-title">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="buy-btn">Купить</button>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }

    // Получение текста категории
    function getCategoryText(category) {
        const categories = {
            'all': 'Все типы',
            'cars': 'Машины',
            'motorcycles': 'Мотоциклы',
            'tractors': 'Тракторы'
        };
        return categories[category] || 'Другое';
    }

    // Форматирование цены
    function formatPrice(price) {
        return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
    }
});
    


document.addEventListener('DOMContentLoaded', function() {
    const openBasket = document.getElementById('openBasket');
    const basketModal = document.getElementById('basketModal');
    const closeBasket = document.getElementById('closeBasket');
    const basketList = document.getElementById('basket-list');
    const emptyMessage = document.getElementById('empty-message');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');

    // Массив для хранения товаров в корзине
    let cartItems = [];

    // Функция: обновить отображение корзины
    function updateCartDisplay() {
        // Очищаем список
        basketList.innerHTML = '';

        if (cartItems.length === 0) {
            emptyMessage.style.display = 'block';
            basketList.style.display = 'none';
            cartCount.textContent = '0';
            totalPrice.textContent = '0 ₽';
        } else {
            emptyMessage.style.display = 'none';
            basketList.style.display = 'block';
            cartCount.textContent = cartItems.length;

            let total = 0;

            // Заполняем список товаров
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.className = 'basket-item';

                li.innerHTML = `
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">${item.price} ₽</span>
                `;

                basketList.appendChild(li);
                total += item.price;
            });

            totalPrice.textContent = `${total} ₽`;
        }
    }

    // Функция: добавить товар в корзину
    function addToCart(name, price) {
        cartItems.push({ name, price });
        updateCartDisplay();
    }

    // Обработчик: открыть корзину
    openBasket.addEventListener('click', function() {
        basketModal.style.display = 'flex';
    });

    // Обработчик: закрыть корзину
    closeBasket.addEventListener('click', function() {
        basketModal.style.display = 'none';
    });

    // Закрытие корзины при клике вне содержимого
    basketModal.addEventListener('click', function(e) {
        if (e.target === basketModal) {
            basketModal.style.display = 'none';
        }
    });

    // Пример: добавим несколько товаров для демонстрации
    // В реальной версии эти вызовы будут из карточек товаров
    addToCart('Фильтр масляный', 350);
    addToCart('Свечи зажигания', 890);
    addToCart('Тормозные колодки', 1200);

    // Инициализация отображения
    updateCartDisplay();
});


    function goToCheckout(productName) {
        window.location.href = `/checkout?product=${productName}`;
    }

    document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product-buy-btn');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
        const productCard = btn.closest('.card pulse');
        const product = {
            id: productCard.dataset.id,
            name: productCard.dataset.name,
            price: parseInt(productCard.dataset.price)
        };

        // Сохраняем товар в localStorage и переходим на страницу заказа
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'checkout.html';
        });
    });
    });


const closepanelbtn = document.querySelector('.close-panel-btn');
const registrationPanel = document.querySelector('.registration-panel'); // замените на класс вашей панели

// Добавляем обработчик события
closeBtn.addEventListener('click', () => {
  registrationPanel.style.display = 'none'; // Скрываем панель
});


registrationPanel.style.opacity = '0';
registrationPanel.style.pointerEvents = 'none';
setTimeout(() => {
registrationPanel.style.display = 'none';
}, 300); // 300 мс — длительность анимации


document.querySelector("#type-filter").addEventListener("change", (evt) => {
    console.log(evt.target.value)
    
    const container = document.querySelector(".container")
    const infoData = {
        "cars": {
        title: "Информация о Машинах",
        content: `
            <p>Современные автомобили: надежные и комфортные.</p>
            <ul>
            <li class="generator"> <button class="button-generator">Двигатель - 25000 ₽</button></li>
            <li class="auto-brake"> <button class="button-auto-brake">Тормоза - 8000 ₽</button></li>
            <li class="battery"> <button class="button-battery">Аккумулятор - 6000 ₽</button></li>
            </ul>
            <img src="https://i.pinimg.com/originals/e1/f1/45/e1f1459e0aa2689117812da18eff6082.jpg" alt="Машины" style="max-width: 100%;"/>
        `
        },
        "bikes": {
        title: "Информация о Мотоциклах",
        content: `
            <p>Двухколёсные транспортные средства для любителей скорости.</p>
            <ul>
            <li class="bike-generator"> <button class="button-bike-generator">Двигатель - 15000 ₽</button></li>
            <li class="bike-chain"> <button class="button-chain">Цепь - 5000 ₽</button></li>
            <li class="bike-brake"> <button class="button-bike-brake">Тормоза - 4000 ₽</button></li>
            </ul>
            <img src="https://universalmotors.ru/motorcycles/benda/motorcycle-benda-chinchilla-300/1052199999733-sx1920x1080g403046.jpg" alt="Мотоциклы" style="max-width: 100%;"/>
        `
        },
        "tractors": {
        title: "Информация о Тракторах",
        content: `
            <p>Мощная сельхозтехника для тяжелых работ.</p>
            <ul>
            <li class="tractor-generator"> <button class="button-tractor-generator">Двигатель - 30000 ₽</button></li>
            <li class="tractor-wheels"> <button class="button-tractor-wheels">Колёса - 12000 ₽ за штуку</button></li>
            </ul>
            <img src="https://www.opex.ru/upload/medialibrary/001/x915A0608.jpg.pagespeed.ic.mI_ZC-K_pc.jpg" alt="Тракторы" style="max-width: 100%;"/>
        `
        }
    };

    container.innerHTML = infoData [evt.target.value].content

})
console.log(document.querySelector("#type-filter"))

const modal = document.getElementById('info-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    const infoData = {
        "cars": {
        title: "Информация о Машинах",
        content: `
            <p>Современные автомобили: надежные и комфортные.</p>
            <ul>
            <li>Двигатель - 25000 ₽</li>
            <li>Тормоза - 8000 ₽</li>
            <li>Аккумулятор - 6000 ₽</li>
            </ul>
            <img src="https://i.pinimg.com/originals/e1/f1/45/e1f1459e0aa2689117812da18eff6082.jpg" alt="Машины" style="max-width: 100%;"/>
        `
        },
        "bikes": {
        title: "Информация о Мотоциклах",
        content: `
            <p>Двухколёсные транспортные средства для любителей скорости.</p>
            <ul>
            <li>Двигатель - 15000 ₽</li>
            <li>Цепь - 5000 ₽</li>
            <li>Тормоза - 4000 ₽</li>
            </ul>
            <img src="https://universalmotors.ru/motorcycles/benda/motorcycle-benda-chinchilla-300/1052199999733-sx1920x1080g403046.jpg" alt="Мотоциклы" style="max-width: 100%;"/>
        `
        },
        "tractors": {
        title: "Информация о Тракторах",
        content: `
            <p>Мощная сельхозтехника для тяжелых работ.</p>
            <ul>
            <li>Двигатель - 30000 ₽</li>
            <li>Колёса - 12000 ₽ за штуку</li>
            </ul>
            <img src="https://www.opex.ru/upload/medialibrary/001/x915A0608.jpg.pagespeed.ic.mI_ZC-K_pc.jpg" alt="Тракторы" style="max-width: 100%;"/>
        `
        }
    };





    const cartBtn = document.getElementById('openBasket');
    console.log(openBasket)
    const cartModal = document.getElementById('cart-modal');
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    const emptyMessage = document.getElementById('empty-message');
    const closeCart = document.getElementById('close-cart');

    

    // Загрузка корзины из localStorage или создание пустой
    let cart = JSON.parse(localStorage.getItem('autoPartsCart')) || [];

    // Обновление числа товаров на кнопке
    const updateCartCount = () => {
        cartCount.textContent = cart.length;
    }

    // Обновление отображения корзины
    const renderCart = () => {
        cartList.innerHTML = '';
        if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        cartList.style.display = 'none';
        } else {
        emptyMessage.style.display = 'none';
        cartList.style.display = 'block';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Удалить';
            removeBtn.className = 'remove-btn';
            closeCart.className = 'closeBasket';
        removeBtn.onclick = () => {
            cart.splice(index,1);
            localStorage.setItem('autoPartsCart', JSON.stringify(cart));
            renderCart();
            updateCartCount();
            }
            li.appendChild(removeBtn);
            cartList.appendChild(li);
        });
        }
    }

    // Открыть/закрыть корзину
    cartBtn.onclick = () => {
        renderCart();
        cartModal.classList.add('active');
    }
    
    // Закрывать по клику вне окна
    cartModal.onclick = (e) => {
        if(e.target === cartModal) cartModal.classList.remove('active');
    }

    // Функция добавления товара в корзину
    function addToCart(itemName){
        cart.push(itemName);
        localStorage.setItem('autoPartsCart', JSON.stringify(cart));
        updateCartCount();
    }

    // При загрузке обновляем количество
    updateCartCount();

    // Добавьте этот скрипт к каждой кнопке "купить" во всех разделах
    // Ниже пример как привязать на кнопки:
    document.querySelectorAll('button[class^="button-"]').forEach(button => {
        button.addEventListener('click', () => {
        // Получаем текст кнопки (название + цена)
        addToCart(button.textContent);
        alert(`Добавлено в корзину: ${button.textContent}`);
        });
    });


    // Функция показа модального окна с нужной информацией
    function showInfoModal(type) {
        if(!infoData[type]) return;
        modalBody.innerHTML = `<h2>${infoData[type].title}</h2>` + infoData[type].content;
        modal.style.display = 'block';
    }

    closeButton.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };

    document.getElementById('type-filter').addEventListener('change', () => {
        const type = document.getElementById('type-filter').value;
        if(type !== 'all') {
        showInfoModal(type);
        // сброс поиска, если нужно
        document.getElementById('search-input').value = '';
        }
    });




buttons.forEach(button => {
    button.addEventListener('click', () => {
    // Убираем класс active со всех секций
    sections.forEach(section => section.classList.remove('active'));
    // Находим секцию по id равному тексту кнопки и показываем её
    const targetSection = document.getElementById(button.textContent);
    if (targetSection) targetSection.classList.add('active');

    // Прокручиваем страницу вверх для удобства просмотра
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
});






const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const typeFilter = document.getElementById('type-filter');
const cards = document.querySelectorAll('.products .card');

    searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    const selectedType = typeFilter.value;

    let found = false;

    // Прячем все карточки, показываем только те, что соответствуют поиску и фильтру
    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        console.log(name)
        const type = card.getAttribute('data-type');

        const matchesQuery = name.includes(query);
        const matchesType = selectedType === 'all' || type === selectedType;

            if (matchesQuery && matchesType) {
            card.style.display = 'block';
            found = true;
            // Прокрутка к первому найденному элементу
            if (!window._hasScrolled) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window._hasScrolled = true;
            }
        } else {
            card.style.display = 'none';
        }
        });

        if (!found) {
        alert('Ничего не найдено по вашему запросу.');
        }
        window._hasScrolled = false;
    });

    // Поиск по нажатию Enter в поле ввода
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
        searchButton.click();
        }
    });


