import { NEW_SIGN_IN, NEW_SIGN_OUT } from "../actions/signInActions";
import {
  newSignIn,
  user,
  
} from "../initialValues/signInValues";

const initialState = {
  newSignIn: newSignIn,
  user:user,
};

export default function signInReducer(state = initialState, { type, payload }) {
  let info = state.newSignIn;

  switch (type) {
    case NEW_SIGN_IN:
      if (info === false) {
        
        return {
          ...state,
          newSignIn: true,
          user:{id: payload.id, accountType : payload.accountType}
          
          
        };
      }
      break;

    case NEW_SIGN_OUT:
      if (info === true) {
        return {
          ...state,
          newSignIn: false,
          signedId:''
        };
      }
      break;
    default:
      return state;
  }
}
