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
