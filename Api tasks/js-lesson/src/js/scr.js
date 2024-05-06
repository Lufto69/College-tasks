



const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const addPrefix = (price) => "$" + String(price);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const discountWithPrefix = compose(
  addPrefix,
  normalizePrice,
  divide100,
  multiply20
);

console.log(discountWithPrefix(200.0))


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

function deepCount(a){
  let cont = a.length;
  for (let i = 0; i < a.length; i++) {
    if(Array.isArray(a[i])){
      cont += deepCount(a[i])
    }
  }
  return cont;
}

console.log(deepCount([1, 2, [3, 4, [5]]]))

// function isPangram(string) {
//   let arr = new Set(string.toUpperCase());
//   let al = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  
  
//   for(let simbol of arr) {
//     simbol.toUpperCase
//     for(let simbol_al of al) {
//       if(simbol == simbol_al){ 
//         let index = al.indexOf(simbol_al);
//         al.splice(index, 1)
//         break
//       }
//     }
//   }
//   if(al == 0){
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isPangram('The quick brown fox jumps over the lazy do'))

// function amountOfPages(summary){
//   let str = '';
//   for(let i = 1; str.length <= summary; i++) {
//     str += i;
//     if(str.length === summary) {
//       return i;
//     }
//   }
// }

// console.log(amountOfPages(25))

// const binaryArrayToNumber = arr => {
//   let str = '';
//   for(let i = 0; i < arr.length; i++) {
//     str += arr[i];
//   }
  
//   return parseInt(str, 2)
// };

// console.log(binaryArrayToNumber([0, 0, 1, 1]))

// function alphabetPosition(text) {
//   let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
//    c = "";

//   for(let i = 0; i < text.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//       if (text[i] == /!|.|`|,/g) {
//         break;
//       }
//       if(text[i].toUpperCase() == arr[j]) {
//         c = `${c}${j+1} `;
//         break;
//       }
//     }
//   }
//   return c;
// };

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// Код возьмите из предыдущего домашнего задания



// let numberOfFilms;

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,

//     start: function() {
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },

//     remF: function() {
//         for (let i = 0; i < 2; i++){
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && a.length < 50 && b != null && a != '' && b != ''){
//                 personalMovieDB.movies[a] = b;
//                 console.log("Оке");
//             } else {
//                 console.log("Не Оке");
//                 i--;
//             }
//         }
//     },

//     kek: function() {
//         if (personalMovieDB.count < 10){
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count > 30){
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },

//     showMyDB: function() {
//         if (personalMovieDB.privat == false) {
//             console.log(personalMovieDB);
//         }
//     },

//     writeYourGenres: function() {
//         for (let i = 0; i < 3; i++){
//             personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
//             if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == ''){
//                 i--
//             }
//         }

//         this.genres.forEach((item, i) => {
//             console.log (`Любимый жанр ${i + 1} - это ${item}`)
//         })
//     },

//     toggleVisibleMyDB: function() {
//         if (this.privat) {
//             this.privat = false
//         } else {
//             this.privat = true
//         }
//     }
// }

// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();