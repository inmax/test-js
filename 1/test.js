require( "./polyfill.js");


var rgb = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

var wb = {
  white: "#FFFFFF",
  black: "#000000",
};

//var colors = Object.assign(rgb, wb);

/*============
RESPUESTA 1
==============


   rgb --> expected output: 
            Object {
                red: '#FF0000',
                green: '#00FF00',
                blue: '#0000FF',
                white: '#FFFFFF',
                black: '#000000'
            }

   wb --> expected output: 
            Object {
                white: '#FFFFFF',
                black: '#000000'
            }

   colors --> expected output: 
            Object {
                red: '#FF0000',
                green: '#00FF00',
                blue: '#0000FF',
                white: '#FFFFFF',
                black: '#000000'
            }

    
    Assign es un método del constructor 'Object' que copia las propidades de uno o mas objectos en otro objecto de destino. 
    
    Este objeto es pasado al método como primer parámetro, en nuestro caso 'rgb', y quedaría mutado despues de ejecutarse la declaración. Sin emgargo 'wb' sería el recurso desde el que queremos copiar las propiedades, y su valor no quedaría modificación despues de la ejecución de 'assign'.
*/

/*============
RESPUESTA 2
==============
Para no mutar 'rgb' ni 'wb' deberiamos copiar ambos en un objeto vacío, que pasaremos al método como primer parámetro.

También podriamos crear un objecto vacío y copiar rgb y wb a través de la sinstaxis 'Destructuring' 

    var colors = {
        ...rgb,
        ...wb
    };
*/

var colors = Object.assign({},rgb, wb);


console.log(rgb, wb, colors);

/*============
RESPUESTA 3
==============*/
/*
Este bug se produce porque el método assign no tienen compatibilidad con EI 11.

La solución sería incluir un Polyfill específico para éste método. Aunque si el contexto de este código fuese un proyecto mas grande, optaría por utilizar un transpilador como Babel. De esta manera podría solucionar mas incidencias como ésta y utilizar ES5, ES6 y posteriores versiones del estandar sin riesgo a tener problemas de incompatibilidad los diferentes navegadores.

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign#Compatibilidad_con_navegadores*/
