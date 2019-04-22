import {createStore,combineReducers} from "redux";
import getNum from "./reducer"
let reducer=combineReducers({
    getNum
})
let store=createStore(reducer)

export default store;