function Subject() {
    this.observors = [];
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observors.push(fn);
    },
    unsubscribe: function(fn) {
        this.observors = this.observors.filter(f => fn !== f);
    },
    fire: function(thisArgs) {
        const context = thisArgs || window;
        this.observors.forEach(fn => {
            fn.call(context);
        })
    }
}


const subject = new Subject();
function obs1() {console.log("obs1 firing")}
function obs2() {console.log("obs2 firing")}
function obs3() {console.log("obs3 firing")}

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);
