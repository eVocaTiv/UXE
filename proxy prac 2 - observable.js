function makeObservable(target) {
    const handlers = Symbol('handlers');
    // storing an array of handlers.
    target[handlers] = [];

    target.observe = function(handler) {
        target[handlers].push(handler);
    }


  return new Proxy(target, {
    set(target, property, value, receiver) {
      // if(property in target) {
      let success = Reflect.set(...arguments);
      if (success) {
          target[handlers].forEach(handler => handler(property, value));
      }
      return success;

      // If we need to detect change in value, can use below approach.
      // const oldValue = Reflect.get(target, property, receiver);
      // if(oldValue !== value) target.observe(property, value);
      // Reflect.set(target, property, value, receiver);
      // return true;
      // } else {
      // return false;
      // }
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // alerts: SET name=John
