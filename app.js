let numSecret = 0; //= generar();
let intentos = 1;
let listaNumerosSorteados = [];
let numMax = 10;
//console.log(numSecret);
function insertTxt(element, title) {
    let titulo = document.querySelector(element);
    titulo.innerHTML = title;
}

function intentoUser(){
    let numero = parseInt(document.getElementById('valorUser').value);
    
    // '===' compara que el valor y el tipo de dato sea igual
    //console.log(numSecret === numero);
    console.log('intentos =',intentos);
    if (numSecret === numero){
        insertTxt('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //No acierta 
        if (numero > numSecret){
        insertTxt('p','El número secreto es menor');
        }
        else {
        insertTxt('p','El número secreto es mayor');
        }
        intentos++;
        limpiar();
    }
    return;
}

function limpiar(){
    document.querySelector('#valorUser').value = '';
    
}

function generar() {
    let numG = Math.floor(Math.random()*numMax)+1;
    console.log(numG);
    console.log(listaNumerosSorteados);
    //Si se sortena todos los campos
    if (listaNumerosSorteados.length == numMax) {
        insertTxt('p','Todos los numeros se han sorteado');
    } else {
        if (listaNumerosSorteados.includes(numG)) {
            return generar();
        } else {
            listaNumerosSorteados.push(numG);
            return numG;
        }
    }
}
function condicionesIniciales() {
    insertTxt('h1', 'Juego del numero secreto');
    insertTxt('.texto__parrafo',`indica un numero del 1 al ${numMax}`);
    numSecret = generar();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiar();
    //Mensaja de inicio intervalos
    //Generar el numero aleatorio
    //Inicializar intentos
    condicionesIniciales();
    //Desabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


