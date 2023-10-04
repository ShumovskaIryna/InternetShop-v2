import handleCart from "./handleCart";
import handleName from "./handleName";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
    handleName
})

export default rootReducers;