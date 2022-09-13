//tüm stateleri topldağım yer

import { combineReducers } from "redux";
import signInReducer from "./reducers/signInReducer";


const rootReducer = combineReducers({
    signIn : signInReducer
})


export default rootReducer;