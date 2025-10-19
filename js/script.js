// Ждём, пока вся HTML-страница полностью загрузится (включая изображения и стили)
document.addEventListener('DOMContentLoaded', function () {

    // Находим ВСЕ элементы с классом "clickable" (это наши интерактивные карточки)
    const cards = document.querySelectorAll('.clickable');

    // Находим ВСЕ элементы с классом "detail-section" (это скрытые блоки с подробной информацией)
    const detailSections = document.querySelectorAll('.detail-section');

    // Проходим по каждой карточке и добавляем к ней обработчик клика
    cards.forEach(card => {
        card.addEventListener('click', () => {

            // Получаем значение атрибута data-target из карточки (например, "about", "history")
            const targetId = card.getAttribute('data-target');

            // Находим на странице блок с id, равным этому значению (например, <div id="about">)
            const targetSection = document.getElementById(targetId);

            // Скрываем ВСЕ детальные секции — устанавливаем стиль display: none
            detailSections.forEach(section => {
                section.style.display = 'none';
            });

            // Показываем ТОЛЬКО ту секцию, которая соответствует нажатой карточке
            targetSection.style.display = 'block';

            // Плавно прокручиваем страницу к этой секции
            targetSection.scrollIntoView({
                behavior: 'smooth', // плавная прокрутка
                block: 'start'      // выравнивание по верхнему краю секции
            });
        });
    });
});
