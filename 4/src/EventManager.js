export default class EventManager {
	constructor(events) {
		this.time = 0;
		this.events = events;
		this.nextEvent = 0;
	}
	run() {
		addEventListener(this.events[0].type, (e) => {
			this.showMessage(e);
		});
		//this.counter();
	}
	counter() {
		setInterval(() => {
			this.time++;
			dispatchEvent(this.events[0]);
		}, 1000);
	}

	showMessage(event) {
		if (!event) {
			console.log("Event is not defined");
		} else {
			console.log(
				`At second ${event.detail.second ?? "time"}: {type: "${
					event.detail.type ?? "type"
				}", message: "${event.detail.message ?? "message"}"`
			);
		}
	}
}
