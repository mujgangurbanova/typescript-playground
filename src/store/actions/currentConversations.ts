import {SET_CURRENT_CONVERSATION} from "store/definitions"
import { CurrentConversation, SetCurrentConversationAction } from "store/types";



export function setCurrentConversationAction(userId:CurrentConversation):SetCurrentConversationAction {
    return {
      type: SET_CURRENT_CONVERSATION,
      payload:  userId,
      
    };
  }