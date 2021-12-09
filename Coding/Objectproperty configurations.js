let user = {name: "Kun"};

let desc = Object.getOwnPropertyDescriptor(user, 'name');

console.log(desc);
// 

// {
//     "value": "Kunal",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }


// Create property, since flags are not supplied => all are false by default
Object.defineProperty(user, "name", {
    value: "Dewan"
});