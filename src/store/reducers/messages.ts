import {
    RECEIVE_MESSAGE,
    SEND_MESSAGE,
    SET_USER_MESSAGES,
} from "store/definitions";
import { ReceiveMessageAction, SendMessageAction, SetUserMessagesAction } from "store/actions/messages";

  export interface Message{
      id?: string
      content: string
      isFromSelf:boolean
      time?: string
  }

  export interface MessageState {
      [key: string]:Message[]
  }

  export type MessagesAction = SendMessageAction | ReceiveMessageAction | SetUserMessagesAction
  
  const initialState:MessageState = {};
  
  export default function messagesReducer(state : MessageState = initialState, action:MessagesAction): MessageState {
    switch (action.type) {
      case SEND_MESSAGE: {
        const { toUserId, content } = action.payload;
        const oldMessages = state[toUserId] || [];
        const newMessage = {
          content,
          isFromSelf: true,
        };
        return {
          ...state,
          [toUserId]: [...oldMessages, newMessage],
        };
      }
      case RECEIVE_MESSAGE: {
        const { fromUserId, content } = action.payload;
        const oldMessages = state[fromUserId] || [];
        const newMessage = {
          content,
          isFromSelf: false,
        };
        return {
          ...state,
          [fromUserId]: [...oldMessages, newMessage],
        };
      }
      case SET_USER_MESSAGES: {
        const { userId, messages } = action.payload;
        return {
          ...state,
          [userId]: [...messages],
        };
      }
  
      default:
        return state;
    }
  }
  