import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import MessageList from'../components/MessageList'
import ChatList from "../components/ChatList";

const Chats = (props) => {
    const {chats, setChats} = props;
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