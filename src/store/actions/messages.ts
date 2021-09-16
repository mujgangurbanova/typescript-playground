import axios from "api/axios";
import {SET_USER_MESSAGES,SEND_MESSAGE,RECEIVE_MESSAGE,} from 'store/definitions'
import { Message } from "store/reducers/messages";

export function postMessage(toUserId:string, content:string) {
    return async (dispatch: Function) => {
      await axios.post(`users/${toUserId}/messages`, { content });
      dispatch(sendMessageAction(toUserId, content));
    };
  }
  
  export function fetchMessages(userId:string) {
    return async (dispatch: Function) => {
      const { data } = await axios.get(`users/${userId}/messages`);
      dispatch(setUserMessages(userId, data.payload));
    };
  }

  export interface SetUserMessagesAction {
    type: 'SET_USER_MESSAGES',
    payload:{
        userId: string
        messages: Message[]
    }
  }
  
  export function setUserMessages(userId:string, messages:Message[]):SetUserMessagesAction {
    return {
      type: SET_USER_MESSAGES,
      payload: {
        userId,
        messages,
      },
    };
  }

  export interface SendMessageAction{
    type: 'SEND_MESSAGE',
    payload: {
      toUserId:string
      content:string
    },
  }
  
  export function sendMessageAction(toUserId:string, content:string):SendMessageAction {
    return {
      type: SEND_MESSAGE,
      payload: {
        toUserId,
        content,
      },
    };
  }

  export interface ReceiveMessageAction{
    type: 'RECEIVE_MESSAGE',
    payload: {
      fromUserId:string,
      content:string,
    },
  }
  
  export function receiveMessageAction(fromUserId:string, content:string):ReceiveMessageAction {
    return {
      type: RECEIVE_MESSAGE,
      payload: {
        fromUserId,
        content,
      },
    };
  }
  