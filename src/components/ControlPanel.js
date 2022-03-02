import { Fab, TextField, useTheme } from "@mui/material";
import { Send } from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import { AUTHORS } from "../constants/common";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addMessage} from "..//store/messages/action"
const ControlPanel = () => {       
    const [value, setValue] = useState('');
    const theme = useTheme();
    const {chatId} = useParams();
    const {name} = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const handleInput = (event) => {
        setValue(event.target.value);
      };

      const handleButton = () => {
        if (value !== '') {
          const message = {
            text: value,
            author: name
          }
          dispatch(addMessage(chatId, message))
          setValue('');
        }
      };
      


    //useEffect(() => {
    //    let timer;
    //    if (messageList.length > 0 && messageList[messageList.length - 1]?.author === AUTHORS.me) {
    //      timer = setInterval(() => setMessageList([...messageList,
    //        {
    //          text: 'Привет это бот!',
    //          author: AUTHORS.bot
    //        }]), 1500)
    //    }  
    //    return () => {
    //      clearTimeout(timer);
    //    }    
    //    
    //  }, [messageList])


    return (<div className={'place'}>
    <TextField 
    style={{margin: '20px'}} 
    id={"outline-basic"} 
    label={'Create message'} 
    variant={'outlined'} 
    type={'text'} 
    value={value} 
    autoFocus 
    onChange={handleInput} 
    />
    <Fab 
    color='primary'
    onClick={handleButton}
    //onKeyDown={handleKeyDown}
    >
     <Send />
     </Fab>
  </div>
  )
}
export default ControlPanel