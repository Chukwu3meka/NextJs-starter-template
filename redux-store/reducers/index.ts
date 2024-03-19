import { combineReducers } from "redux";

import error from "./error";
import layout from "./layout";
import account from "./account";

export default combineReducers({ error, layout, account });
