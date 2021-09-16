import {ADD_NEW_CONVERSATION,REMOVE_CONVERSATION, SET_CONVERSATIONS} from 'store/definitions'
import axios from "api/axios";

export interface AddNewConversationAction{
    type: 'ADD_NEW_CONVERSATION',
    payload: string,
}
export function addNewConversationAction(user:string) {
    return {
      type: ADD_NEW_CONVERSATION,
      payload: user,
    };
  }
  export interface RemoveConversationAction{
    type: 'REMOVE_CONVERSATION',
    payload: string,
  }
  
  export function removeConversationAction(id:string) {
    return {
      type: REMOVE_CONVERSATION,
      payload: id,
    };
  }
  
  export function fetchConversations() {
    return async (dispatch: Function) => {
      const { data } = await axios.get("users");
      dispatch(setConversationsAction(data.payload));
    };
  }

  export interface SetConversationsAction{
    type: 'SET_CONVERSATIONS',
    payload: string,
  }
  
  export function setConversationsAction(conversations:string) {
    return {
      type: SET_CONVERSATIONS,
      payload: conversations,
    };
  }
  