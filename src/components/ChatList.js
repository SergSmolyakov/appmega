import { useParams, Link } from "react-router-dom";
import { Button, List, ListItem, TextField } from "@mui/material";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { useDispatch } from "react-redux";
import { addChat, deleteChat } from "../store/chats/actions";
import { useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";

const ChatList = () => {
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState('');
    const chats = useSelector(state => state.chats.chatList)
    const { chatId } = useParams();    
    const dispatch = useDispatch();
    const handleOpen = () => setVisible(true);
    const handleChange = (event) => setChatName(event.target.value);
    const onAddChat = () => {
        dispatch(addChat(chatName));
        setChatName('');
        setVisible(false);
    }
    const removeChat = (index) => {
        dispatch(deleteChat(index));
    }

    return (
        <>
    <List>
        {chats?.map((chat, index)=> (
            <ListItem key={index}>
                <Link to={`/chats/${chat.id}`}>
                    <b style={{color: chat.id === chatId ? 'white' : 'blue'}}>
                    {chat.name}
                    </b>
                    <button onClick={() => removeChat(index)}><Delete /></button>                
                </Link>
            </ListItem>
        ))}
    </List>
    <button onClick={handleOpen}>Add chat</button>
    <Dialog open={visible} onClose={()=>setVisible(false)}>
        <TextField value={chatName} onChange={handleChange} />
        <Button onClick={onAddChat}>Submit</Button>
    </Dialog> 
    </>
    );
}
export default ChatList