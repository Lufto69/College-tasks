function OpenOwerlay(){
    window.addEventListener('DOMContentLoaded', () => {
        const logo = document.querySelector(".promo__logo"),
        logot = document.querySelector(".promo__logo-tw"),
        menu = document.querySelector(".promo__burger-menu"),
        overlay = document.querySelector(".overlay-menu"),
        menuContent = document.querySelector(".menu-wraper");

        menu.addEventListener('click', () => {
            logo.classList.toggle("logo_menu-active"),
            logot.classList.toggle("logo_menu-active"),
            menu.classList.toggle("burger_active"),
            overlay.classList.toggle("menu-active"),
            setTimeout(function() {
                menuContent.classList.toggle("menu-wraper_active");
              }, 200);
        });
    })
}

OpenOwerlay();


initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.588144, 55.733842],

                // Уровень масштабирования
                zoom: 10
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}