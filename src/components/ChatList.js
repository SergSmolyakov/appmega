
import { useParams, Link } from "react-router-dom";
const ChatList = (props) => {
    const {chatId} = useParams();
    const {chats} = props;

    return <div>
        {Object.keys(chats).map((id, index)=> (
            <div key={index}>
                <Link to={`/chats/${id}`}>
                {chats[id].name}
                </Link>
            </div>
        ))}
    </div>
}
export default ChatList