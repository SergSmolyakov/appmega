import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { useSelect } from '@mui/base';
import { AccountBox } from '@mui/icons-material';
import { PhoneAndroid } from '@mui/icons-material';
import { AUTHORS } from '../constants/common';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';




const MessageList = () => {
  const allMessages = useSelector(state => state.messages.messageList);
  const {chatId} = useParams();
  const messages = allMessages[chatId];   

    return (
    <div className='messenger'>
      <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
        {messages?.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar>{item.author !== AUTHORS.bot ? <AccountBox /> : <PhoneAndroid />}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.text} secondary={item.author} />
          </ListItem>
          ))}        
        </List>
    </div>
    );
        }; 
    export default MessageList
