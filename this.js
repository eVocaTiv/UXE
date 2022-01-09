// access member of object outside the scoped function
let user = {
    name: "Kunal",
    age: 99,

    sayHi() {
        console.log(this.name);
    }
}


// this is not bound!
let anotherUser = {
    name: "Dewan",
    age: 100,
}

function checkThisNotBound(){
    console.log(this.name);
}

user.foo = checkThisNotBound;
anotherUser.foo = checkThisNotBound;

user.foo(); // Kunal
anotherUser.foo(); // Dewan

// if no object, => this == undefined in STRICT mode

checkThisNotBound(); // undefined in STRICT mode, and global object in non-strict mode (eg. window in a browser)


// Arrow functions have no this

let arrowUser = {
    name: "Arrow",
    age: 50,
    f = () => {console.log('hi')},
    sayHi() {
        let arrowFn = () => {console.log(this.name);} // Arrow
    }
}
