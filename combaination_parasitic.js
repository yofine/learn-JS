function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor  = subType;
  subType.prototype = prototype;
}