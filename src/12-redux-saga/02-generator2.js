function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('res.data1')
    }, 1000);
  })
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('res.data2')
    }, 1000);
  })
}

function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('res.data3')
    }, 1000);
  })
}

function *gen() {
  var f1 = yield getData1()
  console.log(f1)

  var f2 = yield getData2()
  console.log(f2)

  var f3 = yield getData3()
  console.log(f3)
}

function run(fn) {
  var g = fn()

  function next(data) {
    console.log('data', data)
    var result = g.next(data)
    console.log('result', result)
    if (result.done) {
      return result.value
    }
    result.value.then(res => {
      next(res)
    })
  }
  next()
}

run(gen)