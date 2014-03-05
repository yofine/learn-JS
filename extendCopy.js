function extendCopy(p) {
  var c = {};
  for (var i in p) {
    c[i] = p[i];
  }
  return c;
}

//var Chinese = {
//  nation: 'china',
//  birthPlace: ['shanghai', 'beijing']
//}
//
//var yofine = extendCopy(Chinese);
//yofine.birthPlace.push('luannan');
//
//console.log(yofine.birthPlace);
//console.log(Chinese.birthPlace);
//
//console.log(yofine.nation);
