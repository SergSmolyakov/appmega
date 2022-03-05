import { FormControlLabel, FormGroup} from "@material-ui/core";
import { Checkbox, TextField } from "@mui/material";
import { useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { exampleAction } from "../store/profile/actions";
import { Fab } from "@mui/material";
import { changeName } from "../store/profile/actions";
import { Send } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
    
    const {showName, name} = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState(name);

    const toggleShowName = useCallback(()=>{
        dispatch(exampleAction);        
    }, [dispatch]);

    const handleInput = (event) => {
        setValue(event.target.value);
    };
    
    const handleButton = () => {
        dispatch(changeName(value));
        toast.success('Name changed')
    };

    return (
    <div>
        <ToastContainer/>
        <h1>Profile</h1>
        <FormGroup>
        <FormControlLabel
        control={
        <Checkbox cheked={showName} onChange={toggleShowName} /> 
        } 
        label={'Toggle Name'}
                
        />
        </FormGroup>        
        {showName && <div>
        <TextField 
        value={value}
        onChange={handleInput}
        />
        <Fab
         color='primary'
         onClick={handleButton}
         >
             <Send />
             </Fab>
            
            </div>}        
        
        
        </div>
        );
};

export default Profile