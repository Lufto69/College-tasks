

function drk(){
  let dark = document.querySelector('body'); // НАходишь блок который будем менять. Это боди
  let btn = document.querySelector('.blek'); // Находишь кнопку которой меняем
  btn.addEventListener('click', () => { //(Дословно) Кнопка - Ивент - Какой ивент?(Клик) - (Аргументы) Аргументов нет - Следовательно
    dark.classList.toggle('darkc') // Блок боди добовляем класс (togle делает так чтобы при повторном нажатии этот класс убирался) - Какой класс мы добовляем
  })
}
drk() //Вызов функции
//Предварительно создать класс который мы хотим добавть в CSS


let but = document.querySelectorAll(".cards__info_but"),
  cont = document.querySelector(".menu__reg_item > span"),
  item = 0;
  
  but.forEach(button => {
    button.addEventListener("click", () => {
      cont.innerHTML = (++item);
      button.textContent = 'Отказаться';
      
    })

  })




overlay()
getValue();


// let txt = document.querySelectorAll(".cards")



//   for (let i = 1; i < 11; i++) {
//     fetch(`https://jsonplaceholder.typicode.com/posts/` + i)
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//       txt.map(Math.sqrt) = (this.title);
//   }
  
// console.log(txt)



function getValue() {

  let bt = document.querySelector(".bt_otzv"),
  vrap = document.querySelector(".vrepper"),
  name = document.querySelector(".name"),
  comments = document.querySelector("#Comments");

  const temp = document.querySelector(".cont_otz"),
  name_out = temp.content.querySelector("#name_out"),
  text_out = temp.content.querySelector("#text_out");
     
  
      bt.addEventListener("click", () => {
        event.preventDefault();
        name_out.textContent = (name.value);
        text_out.textContent = (comments.value);
        let dubl = temp.content.cloneNode(true);
        vrap.append(dubl);
        name.value = "";
        comments.value = "";
    })
};





function overlay(){
  let cor = document.querySelector(".cors"),
      overlay = document.querySelector(".overlay")

  cor.addEventListener("click", () => {
    overlay.classList.toggle("overlay-act")
})

window.addEventListener('DOMContentLoaded', function() {

  let card = querySelectorAll(".cards"),
  btnCard = querySelectorAll(".cards__info_but")


})


  
}








// let x;

// function calc(){
//     let a = Number(document.querySelector("#one").value),
//         b = Number(document.querySelector("#two").value),
//         otv;

//     switch (x){
//         case '1':{
//             document.querySelector("#otv").innerHTML = (a + b);
//             break
//         }
//         case '2':{
//             document.querySelector("#otv").innerHTML = (a * b);
//             break
//         }
//         case '3':{
//             document.querySelector("#otv").innerHTML = (a ** b);
//             break
//         }
//         case '4':{
//             document.querySelector("#otv").innerHTML = (a / b);
//             break
//         }
//         case '5':{
//             document.querySelector("#otv").innerHTML = (a - b);
//             break
//         }
//         case '6':{
//             document.querySelector("#otv").innerHTML = ((a/100) * b);
//             break
//         }
//         case '7':{
//             document.querySelector("#otv").innerHTML = (Math.sqrt(a));
//             break
//         }
//     }
// }