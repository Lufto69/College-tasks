let x;

function calc(){
    let a = Number(document.querySelector("#one").value),
        b = Number(document.querySelector("#two").value),
        otv;

    switch (x){
        case '1':{
            document.querySelector("#otv").innerHTML = (a + b);
            break
        }
        case '2':{
            document.querySelector("#otv").innerHTML = (a * b);
            break
        }
        case '3':{
            document.querySelector("#otv").innerHTML = (a ** b);
            break
        }
        case '4':{
            document.querySelector("#otv").innerHTML = (a / b);
            break
        }
        case '5':{
            document.querySelector("#otv").innerHTML = (a - b);
            break
        }
        case '6':{
            document.querySelector("#otv").innerHTML = ((a/100) * b);
            break
        }
        case '7':{
            document.querySelector("#otv").innerHTML = (Math.sqrt(a));
            break
        }
    }
}

