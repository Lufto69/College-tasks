//Получение контеинера
const Cont = document.querySelector('#container');
//Получение темплейт
const Template = document.querySelector('#item_one');
// const Template_Two = document.querySelector('#item_two');
//Получение элементов для 1 шаблона
const Title_Item = Template.content.querySelector('.title_item_service');
const El_Item_Text1 = Template.content.querySelector('#el_item_text1');
const El_Item_Text2 = Template.content.querySelector('#el_item_text2');
const El_Item_Text3 = Template.content.querySelector('#el_item_text3');
const El_Item_Text4 = Template.content.querySelector('#el_item_text4');
const El_Item_Text5 = Template.content.querySelector('#el_item_text5');
const Prise = Template.content.querySelector('.prise');

// //Получение элементов для 2 шаблона
// const Title_Item_Two = Template_Two.content.querySelector('.title_item_service');
// const El_Item_Text1_Two = Template_Two.content.querySelector('#el_item_text1');
// const El_Item_Text2_Two = Template_Two.content.querySelector('#el_item_text2');
// const El_Item_Text3_Two = Template_Two.content.querySelector('#el_item_text3');
// const El_Item_Text4_Two = Template_Two.content.querySelector('#el_item_text4');
// const El_Item_Text5_Two = Template_Two.content.querySelector('#el_item_text5');
// const Prise_Two = Template_Two.content.querySelector('.prise');


//Запись нового значения и создание элемента
Title_Item.textContent = 'Рекламные материалы';
El_Item_Text1.textContent = 'Верстка макетов';
El_Item_Text2.textContent = 'Флаеры';
El_Item_Text3.textContent = 'Визитки';
El_Item_Text4.textContent = 'Брошюры';
El_Item_Text5.textContent = 'Листовки';
Prise.textContent = '2000 руб.';

let dubl = Template.content.cloneNode(true);
Cont.append(dubl);


Title_Item.textContent = 'бренд дизайн';
El_Item_Text1.textContent = 'Логотипы';
El_Item_Text2.textContent = 'Фирменный стиль';
El_Item_Text3.textContent = 'Айдентика';
El_Item_Text4.textContent = 'Концепция бренда';
El_Item_Text5.textContent = 'Гайдлайн';
Prise.textContent = '3000 руб.';

dubl = Template.content.cloneNode(true);
Cont.append(dubl);


Title_Item.textContent = 'дизайн вывесок и рекламы';
El_Item_Text1.textContent = 'Дизайн вывесок';
El_Item_Text2.textContent = 'Фотопривязки';
El_Item_Text3.textContent = 'Роллапы';
Prise.textContent = '3000 руб.';

dubl = Template.content.cloneNode(true);
Cont.append(dubl);

Title_Item.textContent = 'Digital Дизайн';
El_Item_Text1.textContent = 'WEB дизайн';
El_Item_Text2.textContent = 'Креативы для рекламы';
El_Item_Text3.textContent = 'Презентации';
Prise.textContent = '5000 руб.';

dubl = Template.content.cloneNode(true);
Cont.append(dubl);


Title_Item.textContent = 'Smm';
El_Item_Text1.textContent = 'Stories Instagram';
El_Item_Text2.textContent = 'Post instagram';
El_Item_Text3.textContent = 'Оформление аккаунта';
El_Item_Text4.textContent = 'Рекламные креативы';
El_Item_Text5.textContent = 'Оформление группы';
Prise.textContent = '1500 руб.';

dubl = Template.content.cloneNode(true);
Cont.append(dubl);