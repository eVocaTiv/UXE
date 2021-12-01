// sum(1)(2) = 3.

function sum(a) {
    return function(b) {
        return a+b;
    }
}

console.log(sum(1)(2));



// sort by field
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  // usual way 
  // by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

// less Verbose way?
// users.sort(byField('name'));
// users.sort(byField('age'));

function byField(field) {
    return (a, b) => a[field] > b [field];
}


// function property

function makeCounter() {
    function incCounter() {
        incCounter.count++;
    }

    incCounter.count = 0;
    return counter;
}

let counter = makeCounter();
console.log(counter())
console.log(counter());



