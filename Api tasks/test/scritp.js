const wraper = document.querySelector('.test'),
    submit = document.querySelector('.submit');
let amount = 0,
    amountTrue = 0;

const value = [
    {
        question: 'Что делает команда console.log?',
        value: [
            'Выводит в консоль заданное значение',
            'Выводит эллемент на страницу',
            'Устанавливает интервал'
        ],
        answer: 'Выводит в консоль заданное значение'
    },
    {
        question: 'Что такое функция setTimeout в JavaScript?',
        value: [
            'Создаёт интервал',
            'Останавливает выполнение скрипта',
            'Позволяет отложить выполнение функции на определённое время'
        ],
        answer: 'Позволяет отложить выполнение функции на определённое время'
    },
    {
        question: 'Какого метода массива не существует в JavaScript?',
        value: [
            'append',
            'foeEach',
            'merge'
        ],
        answer: 'merge'
    },
    {
        question: 'Что делает color?',
        value: [
            'Меняет цвет текста',
            'Меняет цвет',
            'Меняет фон'
        ],
        answer: 'Меняет цвет текста'
    },
    {
        question: 'Что делает text-decoration?',
        value: [
            'Меняет декорацию',
            'Меняет текстовое оформление',
            'Меняет цвет текста'
        ],
        answer: 'Меняет текстовое оформление'
    },
    {
        question: 'Тип данных string это?',
        value: [
            'строка',
            'число',
            'объект'
        ],
        answer: 'строка'
    },
    {
        question: 'Можно ли сложить строки?',
        value: [
            'нет',
            'не знаю',
            'да'
        ],
        answer: 'да'
    },
    {
        question: 'Если сложить число и строку будет?',
        value: [
            'число',
            'строка',
            'массив'
        ],
        answer: 'строка'
    },
    {
        question: '"2" + 2 = ?',
        value: [
            '4',
            '22',
            '5'
        ],
        answer: '22'
    },
    {
        question: 'Что будет если вывести масив [1, 2, 3] в консоль',
        value: [
            'ошибка',
            '[1, 2, 3]',
            '123'
        ],
        answer: 'ошибка'
    },
    {
        question: 'Если использовать инкримент в команде console.log(1++) что будет в консоли?',
        value: [
            '2',
            '1',
            '0'
        ],
        answer: '1'
    },
    {
        question: 'Если использовать декримент в команде console.log(++1) что будет в консоли?',
        value: [
            '2',
            '1',
            '0'
        ],
        answer: '2'
    },
    {
        question: 'Чем полезен такой тип ковычек `` ?',
        value: [
            'ничего необычного',
            'красота кода',
            'можно использовать ${…}'
        ],
        answer: 'можно использовать ${…}'
    },
    {
        question: 'const это?',
        value: [
            'значение видимое на всём пространстве кода',
            'изменяемое значение',
            'не изменяемое значение'
        ],
        answer: 'не изменяемое значение'
    },
    {
        question: 'Какие значения можно хранить в переменных?',
        value: [
            'Строки, числа с точкой, простые числа и булевые выражения',
            'Только числа и строки',
            'Строки, числа с точкой и простые числа'
        ],
        answer: 'Строки, числа с точкой, простые числа и булевые выражения'
    },
    {
        question: 'Что такое условный оператор?',
        value: [
            'Оператор сравнения значений',
            'Конструкция, что выполняет код несколько раз',
            'Конструкция для создания определенной переменной'
        ],
        answer: 'Оператор сравнения значений'
    },
    {
        question: 'div это?',
        value: [
            'блочный элемент',
            'строчный элемент',
            'блочно-строчный элемент'
        ],
        answer: 'блочный элемент'
    },
    {
        question: 'p это?',
        value: [
            'название',
            'заголовок',
            'параграф'
        ],
        answer: 'параграф'
    },
    {
        question: 'Что такое «outline»?',
        value: [
            'Граница',
            'Обводка',
            'Внешнее свечение блока'
        ],
        answer: 'Внешнее свечение блока'
    },
    {
        question: 'Какое свойство указывает задний фон для тега?',
        value: [
            'background',
            'display',
            'color'
        ],
        answer: 'background'
    },
    {
        question: 'Какой псевдокласс сработает при установке курсора в текстовое поле?',
        value: [
            ':active',
            ':focus',
            ':hover'
        ],
        answer: ':focus'
    },
    {
        question: 'Какая высота у HTML-элемента div без содержимого?',
        value: [
            '0',
            '100%',
            '16px'
        ],
        answer: '0'
    },
    {
        question: 'С помощью какого тега можно вставить рисунок?',
        value: [
            'img',
            'title',
            'br'
        ],
        answer: 'img'
    },
    {
        question: 'Какой из тегов ниже должен быть расположен в разделе head вашей страницы?',
        value: [
            'i',
            'div',
            'meta'
        ],
        answer: 'meta'
    },
    {
        question: 'Какой из следующих HTML тегов не является действительным?',
        value: [
            'h8',
            'h4',
            'h4'
        ],
        answer: '<h8>'
    },
    {
        question: 'Где используется тег script?',
        value: [
            'Только в теге body',
            'В тегах head и body',
            'Только в теге head'
        ],
        answer: 'В тегах head и body'
    },
    {
        question: 'Отрицание == выглядит как:',
        value: [
            '!=',
            '!',
            '==='
        ],
        answer: '!='
    },
    {
        question: 'Чем отличается == от ===',
        value: [
            'Не отличается',
            'Одно сравнение строгое а, другое не строгое',
            'првое это сравнение, а второе отрицание ему'
        ],
        answer: 'Одно сравнение строгое а, другое не строгое'
    },
    {
        question: 'Что делает .querySelector?',
        value: [
            'Получает первый элемент по заданному признаку',
            'Получает элемент по заданному признаку',
            'Получает элемент по тегу'
        ],
        answer: 'Получает первый элемент по заданному признаку'
    },
    {
        question: 'Что делает .querySelectorAll?',
        value: [
            'Получает все элементы по заданному признаку',
            'Получает элемент по заданному признаку',
            'Получает все элементы по тегу'
        ],
        answer: 'Получает все элементы по заданному признаку'
    },
    {
        question: 'Что делает .createElement?',
        value: [
            'Изменяет элемент',
            'Удаляет элемент',
            'Создаёт элемент'
        ],
        answer: 'Создаёт элемент'
    },
    {
        question: 'Что делает .innerHTML?',
        value: [
            'Удаляет элемент',
            'Изменяет содержимое',
            'Создаёт элемент'
        ],
        answer: 'Изменяет содержимое'
    },
    {
        question: 'Что делает .classList?',
        value: [
            'Добавляет класс',
            'Совершает операции с классами заданными после',
            'Удаляет класс'
        ],
        answer: 'Совершает операции с классами заданными после'
    },
    {
        question: 'Что делает .forEach?',
        value: [
            'Перебирает все элементы массива',
            'Вызывает функцию через заданный промежуток времени',
            'Такого метода не сущевствует'
        ],
        answer: 'Перебирает все элементы массива'
    },
    {
        question: 'Что делает .length?',
        value: [
            'Добовляет символы',
            'Преврощает в строку',
            'Возвращет длинну'
        ],
        answer: 'Возвращет длинну'
    },
    {
        question: 'Какой метод добовлет жлемент в массив?',
        value: [
            '.add',
            '.push',
            '.pop'
        ],
        answer: '.push'
    },
    {
        question: 'Метод сортировки',
        value: [
            '.sort',
            '.sortirovka',
            '.srt'
        ],
        answer: '.sort'
    },
    {
        question: 'С помощью какого тега создаются поля формы?',
        value: [
            'input',
            'field',
            'form'
        ],
        answer: 'form'
    },
    {
        question: 'С помощью какого свойства таблицы определяются её границы?',
        value: [
            'gran',
            'border',
            'width'
        ],
        answer: 'border'
    },
    {
        question: 'Какого поля input не существует?',
        value: [
            'input type="reset"',
            'input type="color"',
            'input type="name"'
        ],
        answer: 'input type="name"'
    },
    {
        question: 'Какой минимальный набор языков для веб разработки?',
        value: [
            'HTML, CSS, JavaScript, Python',
            'HTML, CSS',
            'HTML, CSS, JavaScript'
        ],
        answer: 'HTML, CSS'
    },
    {
        question: 'Тег br используется для добавления',
        value: [
            'переноса строки',
            'абзацного отступа',
            'переноса слова'
        ],
        answer: 'переноса строки'
    },
    {
        question: 'Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?',
        value: [
            'title',
            'body',
            'header'
        ],
        answer: 'title'
    },
    {
        question: 'Что содержит в себе атрибут href?',
        value: [
            'Имя страницы, на которую произойдет перенаправление',
            'Указание на то, где будет открываться новая страница: в том же или новом окне',
            'URL страницы, на которую произойдет перенаправление'
        ],
        answer: 'URL страницы, на которую произойдет перенаправление'
    },
    {
        question: 'Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?',
        value: [
            'Radiobutton',
            'Submit',
            'Checkbox'
        ],
        answer: 'Submit'
    },
    {
        question: 'Какой тэг содержит навигацию?',
        value: [
            'metanav',
            'nav',
            'geo'
        ],
        answer: 'nav'
    },
    {
        question: 'Тэг, подключающий к существующему HTML-документу скрипты, которые выполняются на клиентской стороне – это:',
        value: [
            'object',
            'script',
            'client'
        ],
        answer: 'script'
    },
    {
        question: 'Какой атрибут HTML указывает альтернативный текст для изображения, если данное изображение не отобразится?',
        value: [
            'imgvar',
            'imgalt',
            'alt'
        ],
        answer: 'alt'
    },
    {
        question: 'HTML-тэг, позволяющий воспроизводить аудиозаписи – это:',
        value: [
            'music',
            'sound',
            'audio'
        ],
        answer: 'audio'
    },
    {
        question: 'Какие тэги используются для определения заголовков?',
        value: [
            'Header',
            'Heading',
            'h1-h6'
        ],
        answer: 'h1-h6'
    }
    
]

value.forEach((elem, i) => {
    let itemTest = document.createElement('div')
    itemTest.classList.add('test__item')
    itemTest.innerHTML = `
        <div class="test__question">${i+1}. ${elem.question}</div>
        <div class="test__answer">
            <label><input type="radio" name="${i}" value="${elem.value[0]}">${elem.value[0]}</input></label>
            <label><input type="radio" name="${i}" value="${elem.value[1]}">${elem.value[1]}</input></label>
            <label><input type="radio" name="${i}" value="${elem.value[2]}">${elem.value[2]}</input></label>
        </div>
    `
    wraper.append(itemTest)
    amount++
})

submit.addEventListener('click', () => {
    const itemTests = document.querySelectorAll('.test__item')
    
    itemTests.forEach((i, e) => {
        const answers = i.querySelectorAll('input')

        answers.forEach(answer => {
            if (answer.checked && answer.value == value[e].answer) {
                i.classList.add('active_true')
                amountTrue++
            } else if (answer.checked && answer.value != value[e].answer) {
                i.classList.add('active_false')

                const trueAnswer = document.createElement('div')
                trueAnswer.innerHTML = `Правильный ответ: <span class='true_answer'>${value[e].answer}</span>`
                i.append(trueAnswer)
            }
            answer.setAttribute('disabled', '');
        })
    })
        
    submit.remove()

    const amountQuestion = document.createElement('div')
    amountQuestion.classList.add('amount_question')
    amountQuestion.innerHTML = `<span>${amountTrue}</span> / ${amount}`
    wraper.append(amountQuestion)

})