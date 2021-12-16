let user = {
  name: "John",
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if(prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                throw new ReferenceError(`Prop doesnt exist ${prop}`)
            }
        }
    })
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // ReferenceError: Property doesn't exist: "age"
