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

// outputs "Games" since both objects share the same interests
console.log(user.interests.passion);


// deep copy


function createDeepCopy(newObj, obj) {
    for (key in obj) {
        if (typeof obj[key] == Object) {
            newObj[key] = deepCopy(obj[key]);
        } else {
            newObj[key] = {...obj[key]};
        }
    }
};

deepCopy({}, obj);