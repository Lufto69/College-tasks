import JsonFile from '/customization.json';



OpenOwerlay();

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

 // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [53.401722, 49.494657],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 10
        });

        map.addChild(new YMapDefaultSchemeLayer({
            theme: "dark", customization: JsonFile
        }));
    }