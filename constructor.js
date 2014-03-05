function SuperType () {
  this.color = ['red', 'blue', 'green'];
}

function SubType () {
  SuperType.call(this);
}

var instance1 = new SubType();
instance1.color.push('black');
console.log(instance1.color);  // 'red, blue, green, black'

var instance2 = new SubType();
console.log(instance2.color);  // 'red, blue, green'


// function SuperType (name) {
//   this.name = name;
// }

// function SubType () {
//   SuperType.call(this, 'yofine');
//   this.age = 25;
// }

// var instance = new SubType();
// console.log(instance.name);  // 'yofine'
// console.log(instance.age);  //25