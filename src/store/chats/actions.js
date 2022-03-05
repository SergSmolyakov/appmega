export const ADD_CHAT = "CHAT:ADD_CHAT";
export const DELETE_CHAT = "CHAT:DELETE_CHAT";

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name
})
export const deleteChat =(index) => ({
    type: DELETE_CHAT,
    payload: index
})