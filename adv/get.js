class User {
 
    constructor(first, last){
        this.fi = first;
        this.la = last;
    }
    set fi(value){
        this.Name = value.toUpperCase();
    }
    set la(value){
        this.latName = value.toUpperCase();
    }
    get fullName() {
      return this.Name+" "+this.latName;
    }
};

let user1 = new User("spongebob", "squarepants");
let user2 = new User("patrick", "star");

console.log(user1.fullName);
console.log(user2.fullName);