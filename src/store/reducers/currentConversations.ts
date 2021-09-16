import { SET_CURRENT_CONVERSATION } from "store/definitions";
import {SetCurrentConversationAction} from 'store/actions/currentConversations'

export interface CurrentConversation{
    userId: string | null
}

export type CurrentUserAction = SetCurrentConversationAction;

const initialState = {
  userId: null,
};

export default function currentConversationReducer(state = initialState,action:CurrentUserAction) {
  switch (action.type) {
    case SET_CURRENT_CONVERSATION:
      const { userId } = action.payload;
      return {
        userId,
      };
    default:
      return state;
  }
}
