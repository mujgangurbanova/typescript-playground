import { SET_CURRENT_USER } from "store/definitions";
import { CurrentUser, SetCurrentUserAction } from "store/types";



export function setCurrentUserAction(user:CurrentUser):SetCurrentUserAction {
    return {
      type: SET_CURRENT_USER,
      payload: user,
    };
  }