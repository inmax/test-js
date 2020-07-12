export default class Event {
	constructor(dataEvent) {
		this._type = dataEvent.type;
		this._message = dataEvent.message;
		this._second = dataEvent.second;
	}
	create() {
		return new CustomEvent(
			this._type,
			{
				detail: {
					message:this._message,
					second:this._second,
				},
			},
			{bubbles: false}
		);
	}
}