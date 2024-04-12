const wraper = document.querySelector('.chst'),
input = document.querySelector('#input'),
button = document.querySelector('#button');

button.addEventListener('click', () => {
    addItem()
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Enter") { 
        addItem()
    }

})

function addItem() {
    if(input.value != ''){
        let elem = document.createElement('div'),
        date = new Date()
        elem.classList.add('chat_item')

        elem.innerHTML = `
        <div class="masemge">${input.value}</div>
        <div class="data">${date.getHours()}:${date.getMinutes()}</div>
        `
        input.value = ''
        wraper.append(elem)
    }
}