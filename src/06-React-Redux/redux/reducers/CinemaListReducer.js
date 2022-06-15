const CinemaListReducer = (prevState = { list: [] }, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'changeList':
      newState.list = action.payload
      return newState
    default:
      return prevState;
  }
}

export default CinemaListReducer