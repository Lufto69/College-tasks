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
  let over = document.querySelector(".overlay_case_card"),
      Card = document.querySelectorAll(".cards"),
      Img = Card.querySelector(".cards__img"),
      Titl = Card.querySelector(".cards__info_title"),
      SubTitl = Card.querySelector(".cards__info-subtitle"),
      Prise = Card.querySelector(".cards__info_prise");

  
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