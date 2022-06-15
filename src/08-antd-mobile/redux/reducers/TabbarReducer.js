const TabberReducer = (prevState = { show: true }, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'showTabbar':
      newState.show = true
      return newState
    case 'hideTabbar':
      newState.show = false
      return newState

    default:
      return prevState;
  }
}

export default TabberReducer