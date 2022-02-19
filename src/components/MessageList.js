
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { AccountBox } from '@mui/icons-material';
import { PhoneAndroid } from '@mui/icons-material';
import { AUTHORS } from '../constants/common';




const MessageList = (props) => {

    const { messages } = props;

    return (
    <div className='messenger'>
      <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
        {messages?.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{item.author === AUTHORS.me ? <AccountBox /> : <PhoneAndroid />}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.text} secondary={item.author} />
          </ListItem>
          ))}        
        </List>
    </div>
    );
        }; 
    export default MessageList
