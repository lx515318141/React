import { fromJS } from "immutable"

const TabberReducer = (prevState = fromJS({ show: true }), action) => {
  // let newState = { ...prevState }
  switch (action.type) {
    case 'showTabbar':
      // newState.show = true
      return prevState.set('show', true)
    case 'hideTabbar':
      // newState.show = false
      return prevState.set('show', false)

    default:
      return prevState;
  }
}

export default TabberReducer