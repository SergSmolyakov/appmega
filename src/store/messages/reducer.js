import { ADD_MESSAGE } from "./action";
const initialState = {
    messageList: {}
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const { chatId, message} = action.payload;
            const currentList = state.messageList[chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]:[
                        ...currentList,
                        {
                            ...message,
                            id: `${chatId}${currentList.lenght}`
                        }
                    ]
                }
            }
            default:
                return state

                
    }
}
export default messagesReducer;