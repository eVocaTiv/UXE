// {/* Bind function's args without fixing context */}

function partialDecorator(f, ...boundArgs) {
  let wrapper = function (...args) {
    return f.bind(this, ...boundArgs, ...args);
  };
  return wrapper;
}

let user = {
  firstName: "Kunal",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

user.sayNow = partial(
  user.say,
  new Date().getHours() + ":" + new Date().getMinutes()
);

user.sayNow("Yo");
// [10:00] Kunal: Yo!
