const CinemaListReducer = (prevState = { list: [] }, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'changeList':
      newState.list = action.payload
      return newState

    case 'change-ciname-list':
      console.log(action.payload)
      newState.list = action.payload
      return newState

    default:
      return prevState;
  }
}

export default CinemaListReducer