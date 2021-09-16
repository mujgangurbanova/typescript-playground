import {SET_CURRENT_CONVERSATION} from "store/definitions"
import {CurrentConversation} from "store/reducers/currentConversations"

export interface SetCurrentConversationAction{
    type: 'SET_CURRENT_CONVERSATION',
      payload:CurrentConversation
      
}

export function setCurrentConversationAction(userId:CurrentConversation):SetCurrentConversationAction {
    return {
      type: SET_CURRENT_CONVERSATION,
      payload:  userId,
      
    };
  }