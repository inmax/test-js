export default class EventManager {
	constructor(events) {
        this.time=0;
		this.events = events;
	}
	run() {
		this.counter();
	}
	counter() {
		let timer = setInterval(() => {
			if (this.time === this.getLastSecondEvent()) {
				clearInterval(timer);
			}
			this.events.forEach((item) => {
				if (item.detail.second === this.time) {
                    addEventListener(item.type, this.showMessage);
					dispatchEvent(item);
				}
			});
			this.time++;
		}, 1000);
	}
	getLastSecondEvent() {
		return this.events.reverse()[0].detail.second;
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
