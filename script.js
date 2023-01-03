// CONTADOR - EXERCÍCIO I ----------------------------------------------------


let numero1 = document.querySelector('#numero1')
let acrescentar1 = document.querySelector('#acrescentar1')
let subtrair1 = document.querySelector('#subtrair1')

let contador1 = 0


acrescentar1.onclick = funcaoAcrescentar
subtrair1.onclick = funcaoSubtrair

function funcaoAcrescentar() {
    acrescentar1.classList.add('color1')
    subtrair1.classList.remove('color2')
    contador1 ++
    numero1.innerHTML = contador1
}

function funcaoSubtrair() {
    subtrair1.classList.add('color2')
    acrescentar1.classList.remove('color1')
    contador1 --
     numero1.innerHTML = contador1
 }



 // CONTADOR - EXERCÍCIO II -----------------------------------------------------

let numero2 = document.querySelector('#numero2')
let acrescentar2 = document.querySelector('#acrescentar2')
let subtrair2 = document.querySelector('#subtrair2')

let contador2 = 0




acrescentar2.onclick = function(){
    clearInterval(subtrair2)


    acrescentar2 = setInterval(function(){
        contador2++
        numero2.innerHTML = contador2
    }, 100)
}



subtrair2.onclick =  function(){
    clearInterval(acrescentar2)

    subtrair2 = setInterval(function(){
        contador2--
        numero2.innerHTML = contador2
    }, 100)
}


// CONTADOR - EXERCÍCIO III -----------------------------------------------------

let numero3 = document.querySelector('#numero3')
let acrescentar3 = document.querySelector('#acrescentar3')
let subtrair3 = document.querySelector('#subtrair3')

let contador3 = 0
let crescente
let decrescente



acrescentar3.onclick = function(){
    clearInterval(decrescente)

    acrescentar3.classList.add('color1')
    subtrair3.classList.remove('color2')


    crescente = setInterval(function(){
        contador3++
        numero3.innerHTML = contador3
    }, 100)
}



subtrair3.onclick =  function(){
    clearInterval(crescente)

    subtrair3.classList.add('color2')
    acrescentar3.classList.remove('color1')

    decrescente = setInterval(function(){
        contador3--
        numero3.innerHTML = contador3
    }, 100)
}

