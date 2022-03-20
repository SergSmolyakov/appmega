import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { AUTHORS } from './constants/common';
import Routers from './pages/Routers';
import AuthProvider from './hooks/AuthProvider';


const initialChats = {
  id1: {
    name: 'Chat1',
    messages: [{ text: 'firstmessage', author: AUTHORS.bot }]
  },

  id2: {
    name: 'Chat2',
    messages: [{ text: 'Secondmessage', author: AUTHORS.me }]
  },

  id3: {
    name: 'Chat3',
    messages: [{ text: 'Thirdmessage', author: AUTHORS.me }]
  }
}



function App(props) {
  //const {chats, setChats} = props;
  const [chats, setChats] = useState(initialChats);

  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
    
  );

}



export default App;
