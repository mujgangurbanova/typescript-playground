//*Message types
export interface Message {
  id?: string;
  content: string;
  isFromSelf: boolean;
  time?: string;
}

export interface MessagesState {
  [key: string]: Message[];
}

export type MessagesAction =
  | SendMessageAction
  | ReceiveMessageAction
  | SetUserMessagesAction;

export interface SetUserMessagesAction {
  type: "SET_USER_MESSAGES";
  payload: {
    userId: string;
    messages: Message[];
  };
}

export interface SendMessageAction {
  type: "SEND_MESSAGE";
  payload: {
    toUserId: string;
    content: string;
  };
}

export interface ReceiveMessageAction {
  type: "RECEIVE_MESSAGE";
  payload: {
    fromUserId: string;
    content: string;
  };
}

export interface SetCurrentUserAction {
  type: "SET_CURRENT_USER";
  payload: CurrentUser;
}

export interface CurrentUserState {
  id?: string | null;
  fullName: string | null;
  username: string | null;
  position: string | null;
  image: string | null;
}

export interface CurrentUser extends CurrentUserState {}

export type CurrentUserAction = SetCurrentUserAction;

export interface SetCurrentConversationAction {
  type: "SET_CURRENT_CONVERSATION";
  payload: CurrentConversation;
}

export interface CurrentConversationState {
  userId: string | null;
}

export type CurrentConversationAction = SetCurrentConversationAction;

export interface CurrentConversation extends CurrentConversationState {}

export interface AddNewConversationAction {
  type: "ADD_NEW_CONVERSATION";
  payload: User;
}

export interface RemoveConversationAction {
  type: "REMOVE_CONVERSATION";
  payload: string;
}

export interface SetConversationsAction {
  type: "SET_CONVERSATIONS";
  payload: User[];
}

export interface User {
  id: string;
  fullName: string;
  username: string;
  position: string;
  image: string;
}

export type ConversationsState = User[];

export type ConversationsAction =
  | AddNewConversationAction
  | RemoveConversationAction
  | SetConversationsAction;
