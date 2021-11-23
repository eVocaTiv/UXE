let id = Symbol("description of this id");

// symbols don't auto convert to strings.

// alert(id) => error
alert(id.description); // works
alert(id.toString()); // works


let newId = Symbol("description of this id");

// descriptions can be same, doesn't make the objects equal
alert(id === newId) // false;

// In fact, symbols of same name are also ALWAYS different.


// ADVANTANGE of symbols?
// avoid name clashing when interacting with different packages that might access your objects.


// Symbols are skipped by for..in loop, Object.keys(..)
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for(let key in user) {
    alert(key); // name, age only
}


// BUT Object.assign(..) also copies symbols!


// symbol.for('id'); -> global symbol
// symbol.keyFor(sym); -> returns description of symbol