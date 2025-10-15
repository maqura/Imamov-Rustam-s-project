document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.clickable');
    const detailSections = document.querySelectorAll('.detail-section');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Скрыть все секции
            detailSections.forEach(section => {
                section.style.display = 'none';
            });

            // Показать нужную
            targetSection.style.display = 'block';

            // Прокрутка к секции
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
