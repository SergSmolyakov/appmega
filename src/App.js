import './App.css';
import { useEffect, useState } from 'react';
import { AUTHORS } from './constants/common';

import { Fab } from '@material-ui/core';
import { Send } from '@mui/icons-material';
import {List, ListItem} from '@mui/material'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';


const initialChats = {
  id1: {
      name: 'Chat1',
      messages: [{text: 'firstmessage', author: AUTHORS.bot}]
  },

  id2: {
      name: 'Chat2',
      messages: [{text: 'Secondmessage', author: AUTHORS.me}]
  },

  id3: {
      name: 'Chat3',
      messages: [{text: 'Thirdmessage', author: AUTHORS.me}]
  }
}



  function App(props){
    //const {chats, setChats} = props;
    const [chats, setChats] = useState(initialChats);
     
  return (
    <header className='App-header'>
      <menu className='horizontalMenu'>
      <List sx={{ width: '100%', maxWidth: 350, display: 'flex', justifyContent: 'space-between'   }}>
         <ListItem>
          <Link to='/' className='link'>Home</Link>
          </ListItem>
          <ListItem>
          <Link to='/profile' className='link'>Profile</Link>
          </ListItem>
          <ListItem>
          <Link to='/chats' className='link'>Chats</Link>
          </ListItem>
         </List>  
      </menu>
      
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/chats/:chatId' element={
           <Chats chats={chats} setChats={(chat) => setChats(chat)} />} />            
           <Route path="*" element={<NotFound chats={chats} />} />
         </Routes>           
    </header>
  
  );

  }
 
   

export default App;
