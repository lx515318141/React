import { fromJS } from "immutable";

const CityReducer = (prevState = { cityName: '北京' }, action) => {
  let newState = fromJS(prevState)
  switch (action.type) {
    case 'changeCity':
      return newState.set('cityName', action.payload).toJS()
    default:
      return prevState;
  }
}

export default CityReducer