
const buttons = document.querySelectorAll('.nav-bar button');
const sections = document.querySelectorAll('.content-section');

const searchInputlag = document.getElementById('search-Inputlag');
const typeFilterx = document.getElementById('type-filterx');


// Функция скрывать все секции с деталями
    function hideAllInfoSections() {
        document.querySelectorAll('.content-section').forEach(section => {
        if(section.id.endsWith('-info')) {
            section.style.display = 'none';
        }
        });
    }

    // Показать секцию по типу
    function showInfoSection(type) {
        hideAllInfoSections();
        if(type !== 'all') {
        const section = document.getElementById(type + '-info');
        if(section) section.style.display = 'block';
        }
    }

    document.getElementById('search-button').addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        const type = typeFilter.value;

        // Логика: если в поиске есть ключевые слова из типов, то показываем соответствующую секцию
        const types = ['машины', 'мотоциклы', 'тракторы'];

        let foundType = null;

        // Проверяем подходит ли ввод под один из типов
        if(types.includes(query)) {
        foundType = query;
        } else if(type !== 'all') {
        foundType = type;
        }

        if(foundType) {
        showInfoSection(foundType);
        // Прокрутка к результатам (опционально)
        document.getElementById(foundType + '-info').scrollIntoView({behavior: 'smooth'});
        } else {
        // Если ничего не найдено или не выбран тип, скрываем все
        hideAllInfoSections();
        alert('По вашему запросу ничего не найдено или выберите тип транспорта.');
        }
    });

    // Можно добавить автопоказ по изменению типа фильтра
    typeFilter.addEventListener('change', () => {
        searchInput.value = ''; // очистка поиска при смене
        hideAllInfoSections();
        if(typeFilter.value !== 'all') {
        showInfoSection(typeFilter.value);
        document.getElementById(typeFilter.value + '-info').scrollIntoView({behavior: 'smooth'});
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


