function SuperType (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
};

function SubType (name. age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
  console.log(this.age);
}

var instance1 = new SubType('yofine', 25);
instance1.colors.push('black');
console.log(instance1.colors);  //'red, blue, green, black'
instance1.sayName();  //yofine
instance1.sayAge();  //25

var instance2 = new SubType('dante', 25);
console.log(instance2.colors);  //'red, blue, green'
instance2.sayName();  //dante
instance2.sayAge();  //25

