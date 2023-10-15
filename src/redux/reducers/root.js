import { combineReducers } from 'redux'
import { changePriceReducer } from './cartReducers'
import { changeCartItemsReducer } from './cartReducers'

export const rootReducer =  combineReducers({
  changePriceReducer,
  changeCartItemsReducer,
})
