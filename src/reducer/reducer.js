import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as films} from "./films/films";
import {reducer as user} from "./user/user";
import NameSpace from "./name-space";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILMS]: films,
  [NameSpace.USER]: user,
});
