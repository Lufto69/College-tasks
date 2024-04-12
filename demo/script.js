let ind = 0;
const btn = document.querySelectorAll('.btn'),
sp = document.querySelector('.teleg > span');

btn.forEach(i => {
    i.addEventListener('click', () =>{
        
        sp.innerHTML = (++ind)
    })
})