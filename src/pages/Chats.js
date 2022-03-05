import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import MessageList from'../components/MessageList'
import ChatList from "../components/ChatList";
import ControlPanel from "../components/ControlPanel";


const Chats = () => {    
   
    return (
    <div className='workplace'>      
   <div className='chatList'>
        <ChatList /> 
   </div>
   <div className='chatItem'></div>
    <div><MessageList /></div>
    <ControlPanel  />
    </div>)
}
    
    

export default Chats