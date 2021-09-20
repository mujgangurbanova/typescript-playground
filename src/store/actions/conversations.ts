import {
  ADD_NEW_CONVERSATION,
  REMOVE_CONVERSATION,
  SET_CONVERSATIONS,
} from "store/definitions";
import axios from "api/axios";
import { AddNewConversationAction, SetConversationsAction, User } from "store/types";

export function addNewConversationAction(user: User):AddNewConversationAction {
  return {
    type: ADD_NEW_CONVERSATION,
    payload: user,
  };
}

export function removeConversationAction(id: string) {
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

export function setConversationsAction(conversations: User[]):SetConversationsAction {
  return {
    type: SET_CONVERSATIONS,
    payload: conversations,
  };
}
