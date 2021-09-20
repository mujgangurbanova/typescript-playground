import { SET_CURRENT_CONVERSATION } from "store/definitions";
import { CurrentConversationAction, CurrentConversationState } from "store/types";


const initialState:CurrentConversationState = {
  userId: null,
};

export default function currentConversationReducer(state = initialState,action:CurrentConversationAction):CurrentConversationState {
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
