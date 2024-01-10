//элементы news

const cont = document.querySelector("#container");
const temp = document.querySelector("#news_it");

let create = temp.content.cloneNode(true);
cont.append(create);
create = temp.content.cloneNode(true);
cont.append(create);
create = temp.content.cloneNode(true);
cont.append(create);

//открытие aside

let but_one = document.querySelector("#but_one");
let but_two = document.querySelector("#but_two");
let next_as = document.querySelector("#next_as");

function style_open(){
    but_one.className = "none";
    but_two.className = "no_none_bt";
    next_as.className = "no_none";
}

function style_close(){
    but_one.className = "no_none_bt";
    but_two.className = "none";
    next_as.className = "none";
}

but_one.onclick = style_open;
but_two.onclick = style_close;

//открытие  menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('#burger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('burg_menu_open');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('burg_menu_open');
        })
    })
})