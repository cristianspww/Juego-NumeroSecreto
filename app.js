let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    

    if (numeroDeUsuario === numeroSecreto){

        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : ' veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{

        // El usuario no acerto

        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
            

        }else{
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}


function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';

    
    
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros

    if (listaNumerosSorteados.length == numeroMaximo) {

        asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles')
        
    }else{


    //Si el numero generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    } 
   

}
   
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    //intentos en 0
    intentos= 1;
    
}

function reiniciarJuego() {

    //limpiar caja

    limpiarCaja();
    //indicar mensaje de inicio
     //generar numero aleatorio 
     //intentos en 0
    condicionesIniciales();
   
    //dehabilitar el boton de nuevo juego}
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
