import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { AUTHORS } from "../constants/common";
import { useState } from "react";
import MessageList from'../components/MessageList'
import ChatList from "../components/ChatList";

const initialChats = {
    id1: {
        name: 'Chat1',
        messages: [{text: 'firstmessage', author: AUTHORS.bot}]
    },
    id2: {
        name: 'Chat2',
        messages: [{text: 'Secondmessage', author: AUTHORS.me}]
    }
}

    const Chats = () => {
        const [chats, setChats] = useState(initialChats);
        const {chatId} = useParams();

        if (!chats[chatId]){
            return <NotFound />
        }
        return (
        <div className='workplace'>      
       <div className='chatList'>
            <ChatList chats={chats}/> 
       </div>
       <div className='chatItem'></div>
        <div><MessageList messages={chats[chatId].messages}/></div>
        </div>)
    }
    

export default Chats