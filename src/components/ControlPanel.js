import { Fab, TextField, useTheme } from "@mui/material";
import { Send } from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import { AUTHORS } from "../constants/common";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addMessage, addMessageWithSaga} from "..//store/messages/action"


const ControlPanel = () => {       
    const [value, setValue] = useState('');
    const theme = useTheme();
    const {chatId} = useParams();
    const {name} = useSelector(state => state.profile);
    const allMessages = useSelector(state => state.messages.messageList);
    const dispatch = useDispatch();
    const messages = allMessages?.[chatId];

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
          //dispatch(addMessageWithThunk(chatId, message))
          setValue('');
        }
      };

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