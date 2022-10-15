//Crea una varible vidas
//Asignar a la variable vidas el valor de 3
let vidas = 3;

//Crear una funcion llamada restandoVidas 
//Dentro de la funcion utiliza el operador -- para restar a la varibale vidas
function restandoVidas(){
    vidas--;
}


//Mandar a llamar a la funcion restandoVidas
restandoVidas();


//Crear un a funcion llamada verificarJuego
//Dentro de la funcion crea una condicial que pregunte si vidas es mayor que 0
//si es true mostrar en la consola un mensaje que diga "Bird sigue en el juego"
//En caso contrario mostrar en la consola "Juego terminado"
function verificarJuego(){
    if(vidas > 0){
        console.log('Sigue Jugando');
    } else{
        console.log('Juego Terminado');
    }
}

//Manda a llamar a la funcion verificarJuego
verificarJuego();