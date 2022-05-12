let user = {
  fname: "Kun",
  lname: "Dewan",
  get fullName() {
    return `${this.fname} ${this.lname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

console.log(user.fullName); // Kun Dewan
