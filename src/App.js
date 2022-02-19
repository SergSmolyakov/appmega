
import './App.css';

import { useEffect, useState } from 'react';
import { AUTHORS } from './constants/common';
import { TextField } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import { Send } from '@mui/icons-material';
import {List, ListItem} from '@mui/material'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';



  function App(props){
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    const handleInput = (event) => {
      setValue(event.target.value);
    }
    const handleButton = () => {
      if (value !== '') {
        setMessageList([...messageList, {
          text: value,
          author: AUTHORS.me
        }])
        setValue('')
      }
    }
    useEffect(() => {
      let timer;
      if (messageList.length > 0 && messageList[messageList.length - 1]?.author === AUTHORS.me) {
        timer = setInterval(() => setMessageList([...messageList,
          {
            text: 'Привет это бот!',
            author: AUTHORS.bot
          }]), 1500)
      }  
      return () => {
        clearTimeout(timer);
      }    
      
    }, [messageList])
    
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
           <Route path='/chats/:chatId' element={<Chats/>} />
           <Route path="*" element={<NotFound />} />
         </Routes>
           
         <div className={'place'}>
            <TextField style={{margin: '20px'}} id={"outline-basic"} label={'Create message'} variant={'outlined'} type={'text'} value={value} autoFocus onChange={handleInput} />
             <Fab color='primary' onClick={handleButton}>
             <Send />
             </Fab>
          </div>        
        
      
            
    </header>
  
  );

  }
 
   

export default App;
