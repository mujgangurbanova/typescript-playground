import { SET_CURRENT_USER } from "store/definitions";
import { CurrentUser } from "store/reducers/currentUser";


export interface SetCurrentUserAction{
  type: 'SET_CURRENT_USER',
      payload:CurrentUser
      
}
export function setCurrentUserAction(user:CurrentUser):SetCurrentUserAction {
    return {
      type: SET_CURRENT_USER,
      payload: user,
    };
  }