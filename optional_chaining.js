// value?.prop === if value exists (i.e not undef or null), return value.pop else return undefined


let user = {} // user has no address

alert(user?.address); // undefined
alert(user?.address?.street) // undefined


// Don't overuse chaining

alert(user.address?.street)// => assumes that user must exist, but address is optional.


// Optional chaining can also be used on methods, or square brackets.

let admin = {
    f() {
        alert("woo!");
    }
}

let guest = {};

admin.f?.(); // woo
guest.f?.(); // nothing! (returns undefined)


let nullGuest = null;
key = "f";

admin?.[key]();
nullGuest?.[key]();

