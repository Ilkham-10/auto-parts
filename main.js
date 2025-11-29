
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
    const closeButton = modal.querySelector('.close-button');

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


