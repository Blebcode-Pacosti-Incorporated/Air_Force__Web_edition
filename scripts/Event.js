class EventDispatcher {
	static print_log = false
	static #events = [];
	static #handlers = {};

	static dispatchEvent(event) {
		if (typeof event === 'object' && event.constructor.name === 'Event')
			EventDispatcher.#events.push(event);
		EventDispatcher.handleEvents();
	}

	static handleEvents() {
		let i = 0
		for (let event of EventDispatcher.#events) {
			if (this.print_log)
				console.log(`[EVENT]: <${event.eventName}>`, event)
			if (EventDispatcher.#handlers[event.eventName])
				for (let handler of EventDispatcher.#handlers[event.eventName])
					if (handler.emitter == event.eventObject)
						handler.handler(event);
			EventDispatcher.#events.splice(i, 1);
		}
	}

	static addEventListener(event, object, handler) {
		let handlerJSON = {
			emitter: object,
			handler: handler
		}
		if (!EventDispatcher.#handlers[event])
			EventDispatcher.#handlers[event] = [];
		EventDispatcher.#handlers[event].push(handlerJSON);
	}
}

class Event {
	constructor (eventName, eventObject, eventData=null, callback=null) {
		this.eventName = eventName;
		this.eventObject = eventObject;
		this.eventData = eventData;
		this.callback = callback;
	}

	preventDefault() {
		if (this.callback)
			this.callback();
	}
}