// shallow copy

let user = {
    fname: "Kunal",
    lname: "Dewan",
    interests: {
        professional: "UXE",
        passion: "Music",
    }
};

let user2 = {...user};
user2.interests.passion = "Games";

// outputs "Games" since both objects share reference to the same interests
console.log(user.interests.passion);


// deep copy, but will fail at circular references.
let createDeepCopy = (newObj, obj) => {
    for (key in obj) {
        if (typeof obj[key] == Object) {
            newObj[key] = deepCopy(obj[key]); // recursion
        } else {
            newObj[key] = {...obj[key]};
        }
    }
};

deepCopy({}, obj);