barba.hooks.enter( ( data ) => { console.log (data.next.namespace); });
barba.init({
  
    views: [{
        namespace: 'home',
        afterEnter() {
          aside(),
          menu(),
          news();
        }
      }],
    transitions: [{
      name: 'opacity-transition',
      sync: true ,
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }],
    
  });


//открытие поиска

//открытие aside
// function style_open(){ 
// let but_one = document.querySelector("#but_one");
// let but_two = document.querySelector("#but_two");
// let next_as = document.querySelector("#next_as");
// function style_open(){
//     but_one.className = "none";
//     but_two.className = "no_none_bt";
//     next_as.className = "no_none";
// }
// function style_close(){
//     but_one.className = "no_none_bt";
//     but_two.className = "none";
//     next_as.className = "none";
// }
// but_one.onclick = style_open;
// but_two.onclick = style_close;
// }

function aside(){
window.addEventListener('DOMContentLoaded', () => {
  const but_o = document.querySelector("#but_one"),
  but_t = document.querySelector("#but_two"),
  next_as = document.querySelector("#next_as");

  but_o.addEventListener('click', () => {
    next_as.classList.toggle("no_none"),
    but_o.classList.toggle("none"),
    but_t.classList.toggle("no_none");
  });
  but_t.addEventListener('click', () => {
    next_as.classList.toggle("no_none"),
    but_o.classList.toggle("none"),
    but_t.classList.toggle("no_none");
  })
})
}

//открытие  menu
function menu(){
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
}


//элементы news
function news(){
    const cont = document.querySelector("#container");
    const temp = document.querySelector("#news_it");
    
    let create = temp.content.cloneNode(true);
    cont.append(create);
    create = temp.content.cloneNode(true);
    cont.append(create);
    create = temp.content.cloneNode(true);
    cont.append(create);
}


