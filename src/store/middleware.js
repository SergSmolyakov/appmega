import { AUTHORS } from "../constants/common";
import { ADD_MESSAGE, addMessage } from "./messages/action";

const middleware = store => next => action =>  {
    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHORS.bot){
        const botMessage = {
            author: AUTHORS.bot,
            text: 'Hello im bot in middleware'
        }
        setTimeout(()=>{
            store.dispatch(addMessage(action.payload.chatId,botMessage))
        }, 1000);
    }
    
    return next(action);
    
}
export default middleware