import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp23196740Reducer from '../features/SignUp23196740/redux/reducers'
import SignIn52196739Reducer from '../features/SignIn52196739/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp23196740: SignUp23196740Reducer,
SignIn52196739: SignIn52196739Reducer,

});