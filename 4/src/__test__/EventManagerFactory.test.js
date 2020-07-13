import Event from "./../Event";
import EventManagerFactory from "./../EventManagerFactory";

describe("Pruebas para crear instancia de tipo Eventos", () => {
	const data = [
		{
			type: "InitVideo",
			message: "init video 1",
			second: 0,
		},
		{
            second: 5, 
            type: "HideLayer", 
            message: "hide layer 1"
        },
    ];
    const types= ["InitVideo", "PauseVideo", "StopVideo", "ShowLayer"];
    const obj= EventManagerFactory.create(data, types);

	test("cleanUpDataEvents", () => {
		expect(EventManagerFactory.create()).toBe("Custom Event");
	});

	//Crear una pila de eventos

	test("createEventStack", () => {
		expect(obj).toBe("Custom Event");
	});
});
