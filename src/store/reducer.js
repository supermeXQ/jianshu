import { combineReducers } from 'redux'
import headerReducer from './header/reducer';
export default combineReducers({
    header: headerReducer
})