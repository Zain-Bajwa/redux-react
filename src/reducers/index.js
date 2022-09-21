import changeCounter from "./incementDecrement";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeCounter,
});

export default rootReducer;
