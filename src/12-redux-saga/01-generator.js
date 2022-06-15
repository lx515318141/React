function *test() {
  console.log(111, input1)  // 1
  var input1 = yield '111-return';
  console.log(222, input1)  // 3
  var input2 = yield '222-return';
  console.log(333, input2)  // 4
  var input3 = yield '333-return';
  console.log(444, input3)  // 5
}

var newtext = test()

var res1 = newtext.next('zzz')
console.log('res1', res1)   // 2
var res2 = newtext.next('aaa')
console.log('res2', res2)   // 4
var res3 = newtext.next('bbb')
console.log('res3', res3)   // 6
var res4 = newtext.next('ccc')

console.log('res4', res4)   // 8

// async 代替了generator

function *text1() {
  setTimeout(() => {
    console.log('111-sucess')
    newtext1.next('res1')
  }, 1000);
  var _res1 = yield;
  setTimeout(() => {
    console.log('222-sucess')
    var Res2 =  _res1 + 'res2'
    newtext1.next(Res2)
  }, 1000);
   var _res2 = yield;
  setTimeout(() => {
    console.log('333-sucess')
    var Res3 = _res2 + 'res3'
    console.log(Res3)
  }, 1000);
  yield;
}

var newtext1 = text1()

newtext1.next()
// newtext1.next()
// newtext1.next()