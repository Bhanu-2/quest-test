import {cardItems} from "./Reducer"
import { combineReducers } from "redux"



const RootReducer = combineReducers({
    cardItems: cardItems
})


export default RootReducer;