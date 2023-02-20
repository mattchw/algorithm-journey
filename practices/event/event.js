class Event {
  constructor() {
    this._events = {};
  }

  // add the callback to the event
  on(eventName, callback) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(callback);
  }

  // trigger all callbacks for the event
  trigger(eventName, ...args) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((callback) => callback(...args));
    }
  }

  // remove all callbacks for the event
  off(eventName) {
    delete this._events[eventName];
  }
}