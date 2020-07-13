/*=========
RESPUESTA 1
===========

    Mostrará el valor que tuviese i en el momento en el que el hilo de ejecución de Javascript terminase de recorrer todas las iteraciones del bucle 'for'. En este caso sería 5.

    En cada iteración del bucle, se ejecuta setTimeOut, pero no su función callback que contiene el 'console.log'. 
    
    El event Loop de Javascript deja registrado cada callback,  asociado a un evento de tiempo de espera en una pila de ejecución y continua procesando la siguiente iteración. 

    Cuando termina con la estructura del loop, la variable global i alcanza el valor de 5 y cada evento delay de los setTimeOut dispara su respectivo callback.

    Es en ese momento cuando se ejecuta cada console.log(i), de manera consecutiva según el orden en el que hayan sido apilados y el valor de sus delays.


    for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}
    
*/

/*=========
RESPUESTA 2
===========*/

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}


// Sustituir 'var' por 'let', para darle a la variable un contexto local y multiplicar el valor del delay por el índice del bucle para que el resultado se muestre en consola a cada segundo.

/*https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop 


En realidad cuando el Event Loop apila los callback de los setTimeout, tambien encapsula la información como el contexto y las variables locales de una función. 

Al darle contexto local a 'i' mendiante let, es como si sacasemos una foto del valor de i en el contexto del setTimeout en el momento que es registrado en la pila.
Gracias a eso cuando se ejecute mas tarde el callback podremos rescatar el valor que i tuvo en en ese momento.
*/
