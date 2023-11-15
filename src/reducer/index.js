import { combineReducers } from "@reduxjs/toolkit"

import NameReducer from "../slices/name"
import DateReducer from '../slices/date'
import AgeReducer from '../slices/age'

const rootReducer = combineReducers({
    name:NameReducer,
    date:DateReducer,
    age:AgeReducer,
})

export default rootReducer
