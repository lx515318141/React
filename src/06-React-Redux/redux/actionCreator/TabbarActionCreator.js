// 如果dispatch中的逻辑不复杂的时候是不需要用到actionCreator的
// 如果dispatch中的逻辑比较复杂可以将大段的逻辑写在下面的函数中
function show() {
  return {
    type: 'showTabbar'
  }
}

function hide() {
  return {
    type: 'hideTabbar'
  }
}

export {show, hide}