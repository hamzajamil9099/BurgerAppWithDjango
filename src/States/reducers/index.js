import { combineReducers } from "redux";
import totalReducer from "./totalReducer";
import setLogin from "./LoginCheck";
import IngrediantReducer from "./IngrediantReducer";
const reducers = combineReducers({
	total: totalReducer,
    isLoggedIn : setLogin,
    items: IngrediantReducer
})
export default reducers;
