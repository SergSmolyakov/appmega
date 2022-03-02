import { ADD_CHAT } from "./actions"

const initialState = {
    chatList: []
}

const chatReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            const newChat = {
                id: `id${state.chatList.lenght}`,
                name: action.payload
            }
            return {
                ...state,
                chatList: [...state.chatList, newChat]
            }

        default:
            return state
    }
}

export default chatReducer