import ChatList from "../components/ChatList"

const NotFound = (props) => {
        
    return (<div>
        <div>Not Found</div>
        <ChatList chats={props.chats} />
    </div>)

}


export default NotFound