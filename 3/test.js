let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise
    .then((successMessage) => {
        console.log("Yes! " + successMessage);
    })
    .catch((failMessage) => {
        console.log("No! " + failMessage);
    });

/*=================
RESPUESTA 3 
===================

Los objectos de tipo de promesa se introdujeron con el estandar ES6 y facilitaron el trabajo con funciones que necesitan ejecutarse de manera asíncronas. Esto se resolvía antiguamente mediante el uso callbacks que hacían el código poco mantenible y díficil de leer.

Para hacer compatible el uso de las promesas en IE utilizaría una biblioteca de polyfills de terceros como por ejemplo esta:

https://github.com/stefanpenner/es6-promise#readme

En el caso de que este código formase parte de un proyecto mas grande, utilizaría directamente Babel para transpilar el código de ES6 a ES5 y hacer compatibles todas las especificaciones mas recientes a los navegadores mas antiguos.
*/

