// código adaptado de:
// https://www.dofactory.com/javascript/design-patterns/decorator

const User = function(name) {
  this.name = name;

  this.say = function() {
    console.log("User: " + this.name);
  };
}

const DecoratedUser = function(user, street, city) {
  this.user = user;
  this.name = user.name;  // ensures interface stays the same
  this.street = street;
  this.city = city;

  this.say = function() {
    console.log("Decorated User: " + this.name + ", " +
                 this.street + ", " + this.city);
  };
}

function run() {

  const user = new User("Kelly");
  user.say();

  const decorated = new DecoratedUser(user, "Broadway", "New York");
  decorated.say();
}

run();