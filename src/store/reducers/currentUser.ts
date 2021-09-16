import { SetCurrentUserAction } from "store/actions/currentUser";
import { SET_CURRENT_USER } from "store/definitions";


export interface CurrentUser{
    id?:string | null
    fullName:string | null
    username: string | null
    position: string | null
    image: string | null
}

export type CurrentUserAction = SetCurrentUserAction;

const initialState ={
  fullName: null,
  username: null,
  position: null,
  image: null,
  id:null
};

export default function currentUserReducer(state = initialState, action:CurrentUserAction) {
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
