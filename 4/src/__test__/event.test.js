
import hola from './prueba';
const numberA = 10 + 10;


test("Debería ser 20", () => {
  expect(numberA).toBe(30);
});

test("Debería ser 20", () => {
    const holaa= hola;
  expect(holaa).toBe(30);
});

/*describe("Pruebas para crear instancia de tipo Eventos", () => {
  test("Debería ser 20", () => {
    //patron A/A/A . Arrange/act/asset

    //1.Assert
    const objt = new Eventt();
    // expect(obj).toStricEqual({lo que sea})

    
  });
});*/
