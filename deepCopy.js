function deepCopy(p, c) {
  c = c || {};
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {};
      arguments.callee(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}

//var Chinese = {
//  nation: 'China',
//  birthPlace: ['shanghai', 'beijing']
//}
//
//var yofine = deepCopy(Chinese);
//yofine.birthPlace.push('luannan');
//
//console.log(yofine.birthPlace);
//console.log(Chinese.birthPlace);
