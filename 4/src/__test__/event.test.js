import Event from "./../Event";


describe("Pruebas para crear instancia de la classe Event", () => {
	//1.Assert
	const obj = new Event({
		type: "InitVideo",
		message: "init video 1",
		second: 0,
	}).create();

	test("Debería devolver un objeto con la propiedad detail, con la información second y message", () => {
		expect(typeof obj).toBe("Custom Event");
	});

	test("Debería devolver un objeto con la propiedad detail, con la información second y message", () => {
		expect(obj.detail).toEqual({
			message: "init video 1",
			second: 0,
		});
	});
});
