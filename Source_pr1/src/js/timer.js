export function timer() {
    const endTime = '2024-11-25';

    function getTimeShowe(endTime) {
        const time = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours = Math.floor((time / (1000 * 60 * 60)) % 24),
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

    function showeTime(selectorTimer, endTime) {
        const numbers = document.querySelector(selectorTimer),
            days = document.querySelector('#days'),
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
            }
        }
    }

    showeTime('.container1', endTime)
}