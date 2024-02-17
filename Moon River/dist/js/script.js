OpenOwerlay();
slider();

//Оверлей меню
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

//Слайдер
function slider(){
  window.addEventListener('DOMContentLoaded', () => {
    const sliderButtons = document.querySelectorAll(".carousel__panel_arrow"),
          imegList = document.querySelector(".carousel__wraper");

    sliderButtons.forEach(button => {
      button.addEventListener("click", () => {
        const derection = button.id === "prev-slide" ? -1 : 1, //
              scrollAmount = imegList.clientWidth * derection;
        imegList.scrollBy({left: scrollAmount, behavior: 'smooth'});
      })
    })
  })
}


ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.401722, 49.494657],
        zoom: 10
    });

    const layer = new YMapDefaultSchemeLayer({
        customization: [
          // Делаем прозрачными все геометрии водных объектов.
          {
            tags: {
              all: ['water']
            },
            elements: 'geometry',
            stylers: [
              {
                opacity: 0
              }
            ]
          },
          // Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
          {
            tags: {
              any: ['poi', 'transit_location']
            },
            elements: 'label.text.fill',
            stylers: [
              {
                color: '#0000DD'
              }
            ]
          }
        ]
      });
      map.addChild(layer);
}
