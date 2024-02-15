import { combineReducers } from 'redux'
import cartSlice from '../../slice/cartSlice';

const reducer = combineReducers({
  cart: cartSlice
})

export default reducer;