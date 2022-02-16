import logo from './logo.svg';
import './App.css';
import Message from './Message';
import { useEffect, useState } from 'react';
import { AUTHORS } from './constants/common';

const messageList = [
  {
    text: 'goody',
    authot: 'me'
  }
];

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
    const fontSizeHeader = '50px';
  return (
    <div>
      <header className={`App-header ${props.showGreen ? 'header-green' : 'header-blue'}`} style={{top:fontSizeHeader}}>
      My Mega app
      <h3>My name {props.myName}</h3>      
      <Message name={'Goody'} />
      <>Messenser
      <ul className='messenger'>
        {messageList.map((item, index) => (
        <li className='messageBox'>
          <div className='message'>{item.text}</div>
          <div className='author'>{item.author}</div>
          
        </li>
        ))}
      </ul>
      
      </>
      <input type={'text'} value={value} onChange={handleInput} />
      <button type={'button'} onClick={handleButton}>Send</button>
    </header>
    
    </div>
  
  );

  }
 
   

export default App;
