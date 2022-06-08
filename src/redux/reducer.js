import {combineReducers} from "@reduxjs/toolkit";
import userSlices from "./userSlice";

const reducer = combineReducers({
    user: userSlices
})

export default reducer;