import { Checkbox } from "@mui/material";
import { useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { exampleAction } from "../store/profile/actions";
const Profile = () => {
    
    const {showName, name} = useSelector(state => state);
    const dispatch = useDispatch();
    const toggleShowName = useCallback(()=>{
        dispatch(exampleAction);        
    }, [dispatch]);
    return (
    <div>
        <h1>Profile</h1>
        <Checkbox 
        name="showName"
        cheked={showName}
        onChange={toggleShowName}
        label={'Toggle Name'}
        />
        <div>Name: {showName ? name: 'No name' }</div>
        
        </div>
        );
};

export default Profile