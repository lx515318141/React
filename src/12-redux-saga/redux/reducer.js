function reducer(prevState = {
  list1: [],
  list2: [],
}, action = {}) {
  let newState = { ...prevState }
  let { type, payload } = action
  switch (type) {
    case 'change-list1':
      console.log(payload)
      newState.list1 = payload
      return newState;
    case 'change-list2':
      console.log(payload)
      newState.list2 = payload
      return newState;
    default:
      return prevState;
  }
}

export default reducer