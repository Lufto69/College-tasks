/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = +prompt('На сколько оцените его?', '');
// };

// console.log(personalMovieDB)
// function fib(num) {
//     if (typeof(num) !== "number" || !Number.isInteger(num) || num <= 0){
//         return ""
//     } 

//     let fibo = [0, 1]
    
//     for (let i = 0; i + 2 < num; i++){
//         fibo[i + 2] = fibo[i] + fibo[i + 1]
//     }
//     let res = fibo.join(' ')
//     console.log(res)
// }

// function fib2(num) {
//     if (typeof(num) !== "number" || !Number.isInteger(num) || num <= 0){
//         return ""
//     } 

//     let [prev, curr] = [0, 1];
//     console.log(prev, curr)
//     for (let i = 0; i + 2 < num; i++){
//         [prev, curr] = [curr, prev + curr];
//         console.log(curr)
//     }
// }
//  fib2(10)


// const personalPlanPeter = {
//     age: 29,
//     lang: ['RU', 'ENG'],
//     tyme: '1 month',
//     language: {
//         js: '20%',
//         php: '10%'
//     },
//     showAgeAndLangs: function () {
//         console.log(`Мне ${personalPlanPeter.age} и я владею языками: ${personalPlanPeter.lang.join(" ")}`)
//     }
// }

// function showExperience(piple) {
//     console.log(piple.tyme)
// }

// function showProgrammingLangs(piple) {
//     let str = '';

    

//     for ( let key in piple.language){
//         str += `Язык ${[key]} изучен на ${piple.language[key]} `
//     }

//     if (str != '') {
//         console.log(str)
//     }
// }


// const arr = ['Peter', 'Ann', 'Alex', 'Linda']

// function showFamily(array) {
//     if (array == 0){
//         console.log('Семья пуста')
//     }

//     let str = 'Семья состоит из: '

//     array.forEach(element => {
//         str += `${element} `
//     });
//     return str
// }



// console.log(showFamily(arr))


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function showFamily(array) {
    
//     array.forEach(element => {
//         let str = ''
//         str += element.toLowerCase()
//         console.log(str)
//     });
    
// }

// const someString = 'This is some strange string';

// function reverse(kek) {
//     let str = kek.split('').reverse().join('');
//     console.log(str)
// }
// reverse(someString)

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// let DontHeve = [];

// function availableCurr(value, notMany) {
    
//     if (value.length === 0){
//         return 'Нет доступных валют'
//     }

//     let str = 'Доступные валюты:\n'

//     value.forEach(element => {
//         if (element != notMany){
//             str += `${element}\n`
//         }
//     })

//     return str
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))


// const shoppingMallData = {
//     magasin: [
//         {
//             width: 30,
//             length: 20
//         },
//         {
//             width: 40,
//             length: 50
//         },
//         {
//             width: 20,
//             length: 30
//         }
//     ],
//     height: 3,
//     oneRm: 10,
//     budjet: 20000
// }


//  function isBudgetEnough() {
//     let sumV = 0
//     shoppingMallData.magasin.forEach(item => {
//         sumV += item.width * item.length * shoppingMallData.height
//     })
//     console.log(sumV)
//     if(shoppingMallData.budjet >= sumV * shoppingMallData.oneRm){
//         return 'Бюджета достаточно' + sumV * shoppingMallData.oneRm
//     } else {
//         return 'Бюджета недостаточно' + sumV * shoppingMallData.oneRm
//     }
//  }

//  console.log(isBudgetEnough())


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(people) {
//     people.sort();
//     const grop1 = [], grop2 = [], grop3 = [], grop4 = [];

//     people.forEach((item) => {
//         if (grop1.length < 3){
//             grop1.push(item)
//         } else if (grop2.length < 3) {
//             grop2.push(item)
//         } else if (grop3.length < 3) {
//             grop3.push(item)
//         } else {
//             grop4.push(item)
//         }
//     })
// let res;
//     if (grop4.length === 0){
//         res = 'Оставшиеся студенты: -'
//     } else {
//         res = `Оставшиеся студенты: ${grop4}`
//     }
//     return [grop1, grop2, grop3, res]
// }
// console.log(sortStudentsByGroups(students))

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if ((+fDish.price.slice(0, -1)) + (+sDish.price.slice(0, -1)) < parseInt(average, 10)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// transferWaitors(restorantData.waitors);
// function foctorial(n) {
//     if (n === 1){
//         return 1
//     } else {
//         return n * foctorial(n - 1)
//     }
// }

// console.log(foctorial(5))
// console.log(sortStudentsByGroups(students))


'use strict';
color()
slider()
function color(){
    let input = document.querySelector('.inp'),
    button = document.querySelector('.btn'),
    value = '';

    button.addEventListener("click", (e) => {
        e.preventDefault();
        value = input.value;
        if(value == ''){
            input.style.cssText = `background-color: #fff;`
        } else {
            input.style.cssText = `background-color: ${value};`
        }
    })
}

function slider(){
    var slide_left = document.querySelector('.l'),
    slide_right = document.querySelector('.r'),
    total_img = document.querySelectorAll('.swiper-slide'),
    toch = document.querySelector(".tochki"),
    temp_toch = document.querySelector(".tochki_t"),
    tochs = document.querySelector(".toch"),
    index = Math.floor(total_img.length/2),
    it = 0;
    

    while (it < total_img.length){
        let dubl = temp_toch.content.cloneNode(true);
        toch.append(dubl);
        it++
    }

    function on(){
        total_img[index].style.display = 'block'
    }

    function off(){
        total_img[index].style.display = 'none'
    }

    on()

    slide_right.addEventListener('click', () => {
        off()
        if(index <= total_img.length){
            ++index
            slide_left.style.display = 'block'
        } 
        if(index == total_img.length - 1) {
            slide_right.style.display = 'none'
        }
        on()
    });

    slide_left.addEventListener('click', () => {
        off()
        if(index >= 0){
            --index
            slide_right.style.display = 'block'
        } 
        if(index == 0){
            slide_left.style.display = 'none'
        }
        on()
    });

    tochs.addEventListener('click', (e) => {
        index = +toch[e];
        console.log(index)
        off()
        on()
    })

    // function timeScrol(){
    //     if(index < total_img.length - 1){
    //         index++;
    //     } else {
    //         index = 0;
    //     }
    //     on()
    //     off()
    //     console.log('iter')
    // }
    // setInterval(timeScrol, 1000);
   
}
