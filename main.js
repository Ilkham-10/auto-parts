
const buttons = document.querySelectorAll('.nav-bar button');
const sections = document.querySelectorAll('.content-section');

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
