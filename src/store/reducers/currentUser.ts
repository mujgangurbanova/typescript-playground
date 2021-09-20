import { SET_CURRENT_USER } from "store/definitions";
import { CurrentUserState,CurrentUserAction } from "store/types";



const initialState:CurrentUserState ={
  fullName: null,
  username: null,
  position: null,
  image: null,
  id:null
};

export default function currentUserReducer(state = initialState, action:CurrentUserAction): CurrentUserState {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { id, fullName, username, position, image } = action.payload;
      return {
        id,
        fullName,
        username,
        position,
        image,
      };
    default:
      return state;
  }
}
