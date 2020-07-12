import EventManager from "./EventManager";
import Event from "./Event";


export default class EventManagerFactory {
	static create(events, types) {
        const cleanData =EventManagerFactory.cleanUpDataEvents(events, types);
        const eventStack = EventManagerFactory.createEventStack(cleanData);
        return new EventManager(eventStack);
    }

    static cleanUpDataEvents(dataEvents, types) {
        if (!dataEvents || !Array.isArray(dataEvents) || dataEvents.length === 0) return null;
        if (!types || !Array.isArray(types) || types.length === 0) return null;
        return dataEvents.filter((itemEvent) =>
            types.some((itemType) => itemType === itemEvent.type)
        );
    }
    static createEventStack(events){
        if (!events || !Array.isArray(events) || events.length === 0) return null;
        return events.map(e=> new Event(e).create());
    }
}
