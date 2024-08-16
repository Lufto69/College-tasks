const endTime = ('2024-11-25T00:00:00.000+04:00'),

container1 = document.querySelector('.container1'),
sale = document.querySelector('.sale'),
body = document.querySelector('body'),

frazInterval = setInterval(say, 10000)

showeTime(endTime)
say()

function getTimeShowe(endTime) {
    const time = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(time / (1000 * 60 * 60 * 24)),
    hours = Math.floor(((time / (1000 * 60 * 60)) % 24)),
    minutes = Math.floor((time / 1000 / 60) % 60),
    seconds = Math.floor((time / 1000) % 60);
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`
    } else {
        return num
    }
}

function showeTime(endTime) {
    const days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        timeInterval = setInterval(update, 1000);

    update()

    function update() {
        const t = getTimeShowe(endTime);

        days.innerHTML = getZero(t.days)
        hours.innerHTML = getZero(t.hours)
        minutes.innerHTML = getZero(t.minutes)
        seconds.innerHTML = getZero(t.seconds)

        if(t.total <= 0){
            clearInterval(timeInterval)
            days.innerHTML = '00'
            hours.innerHTML = '00'
            minutes.innerHTML = '00'
            seconds.innerHTML = '00'
            setTimeout(() => {
                container1.style.display = 'none'
            }, 3000)
        }
    }
}

function say() {
    const exemple = [
        'Сделай хоть что-то чтобы быть лучше',
        'Скоро всё случится',
        'Результат ценен, но чем тернистей путь тем счастливее ты будешь в конце',
        'В конце ты обретёшь счастье',
        'Лишь начни',
        'За шагом тайна бытия',
        'Печеньки и кофе - помни',
        'Страдание ведёт с просветлению. Саморазрушение к самопознанию',
        'Терпи, не ной - еблан',
        'На пенсии спать будешь',
        'Е БА ШИТЬ - это всё что тебе нужно',
        "Успех - это идти от неудачи к неудаче, не теряя энтузиазма.",
        "Лучшая месть - это огромный успех.",
        "Измени свои мысли и ты изменишь мир.",
        "Упорный труд побеждает талант, когда талант не трудится.",
        "Я всегда выберу ленивого человека для выполнения сложной работы, потому что он найдет легкий способ ее выполнения.",
        "Ум - это все. Вы становитесь тем, о чем думаете.",
        "Сначала делайте тяжелую работу. Легкая работа сама о себе позаботится.",
        "Если вы поставите перед собой абсурдно высокие цели, и это обернется неудачей, ваша неудача будет выше успеха всех остальных.",
        "Разница между обычным и экстраординарным - в этом небольшом лишнем.",
        "Будь скромным. Будь голодным. И всегда будь самым усердным в комнате.",
        "Главная причина, по которой люди терпят неудачу в жизни, заключается в том, что они слушают своих друзей, семью и соседей.",
        "Ограничения живут только в нашем сознании. Но если мы используем свое воображение, наши возможности становятся безграничными.",
        "Стремитесь быть не успешным человеком, а скорее ценным человеком.",
        "Если кофеин не помогает, попробуй настроить будильник под запах свежевыпеченного хлеба.",
        "Сегодняшний день - как батут: чем выше попадаешь, тем сильнее можешь упасть. Но весело же!",
        "Лучший способ сделать что-то невозможное - попросить сделать это кота. Он либо сделает, либо расскажет, как это сделать с помощью уроков дремучей лени.",
        "Помни: даже самый длинный путь начинается с первого шага. Иногда этот путь похож на бег по лабиринту в темноте, но ты всегда можешь наткнуться на утюг и уйти с перегаром.",
        "Лучшее лекарство от прокрастинации - не важно как делать, главное - начать. Но если хочешь, можешь начать с того, чтобы сделать список из того, что нужно сделать. Потом можно просто потерять этот список и посмотреть на себя в зеркало, прикидывая, что ты супергерой.",
        "Всякое неприятное - к лучшему! Даже если не получилось, у тебя будет хороший рассказ на вечер и отличная идея для следующего эксперимента.",
        "Как сказал мой будильник сегодня утром: 'Вставай, не бойся! Хуже уже не будет... наверное.'",
        "Помни, что с каждым вздохом ты приближаешься к чему-то новому. Как минимум, к следующему вдоху.",
        "Секрет успеха - в том, чтобы найти баланс между амбициями и ленью. Вряд ли кто-то добился успеха, забывая про обе стороны медали.",
        "Никогда не говори 'никогда'. Пока ты не попробуешь съесть целую пиццу сам, ты не узнаешь, на что способен."
    ],
    t = getTimeShowe(endTime);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    sale.innerHTML = exemple[getRandomInt(0, 33)]

    if(t.total <= 0){
        clearInterval(frazInterval)
        setTimeout(() => {
            sale.innerHTML = 'Что поменялось?'
            sale.style.marginTop = '55%'
            body.style.backgroundColor = '#000'
            sale.style.color = '#fff'
        }, 3000)
    }
}