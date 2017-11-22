export default class EventDispatcher {
  constructor() {
    this._events = {};
  }

  on(name, callback) {
    var listeners = this._events[name];
    if (listeners == null) {
      listeners = [];
      this._events[name] = listeners;
    }
    for (var i = 0, len = listeners.length; i < len; i++) {
      if (listeners[i] == callback) {
        return;
      }
    }
    this._events[name].push(callback);
  }

  off(name, callback) {
    var listeners = this._events[name];
    if (listeners == null) {
      return;
    }

    for (var i = 0, len = listeners.length; i < len; i++) {
      if (listeners[i] == callback) {
        listeners.splice(i, 1);
        break;
      }
    }
  }

  emit(name, ...payloads) {
    var listeners = this._events[name];
    if (listeners == null) {
      return;
    }

    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, payloads);
    }
  }
}
