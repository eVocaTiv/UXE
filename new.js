function User(name) {
    this.name = name;
    this.someBoolean = false;
}

let user1 = new User("Kunal");


// to create an object just once, use immediately invoked constructor.

let oneTimeObject = new function() {
    this.name="Just once";
}