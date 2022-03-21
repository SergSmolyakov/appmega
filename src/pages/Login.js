import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../services/firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/AuthProvider';
import { toast, ToastContainer } from "react-toastify";
import { Toc } from "@mui/icons-material";


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || "/";

    const handleEmail = (event) => {
        setEmail(event.target.value)        
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            await auth.signin({ email, password}, () => {
                setTimeout(navigate(()=>from, { replace: true }), 2000);                
            });
                toast.success('Успешный вход!');
            
            
        }catch (event){
            setError(event);
            console.error(event);
        }

        
    };


    return(
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <h1>Вход</h1>
                <p>Введите логин и пароль для входа</p>
                <div>
                    <TextField
                    type = 'email'
                    name = 'email'
                    value={email}
                    onChange={handleEmail}
                    placeholder={'Введите Email'}
                    fullWidth
                     />
                </div>
                <br/>
                <div>
                    <TextField
                    type = 'password'
                    name = 'password' 
                    value={password}
                    onChange={handlePassword}
                    placeholder={'Введите ваш пароль'}
                    fullWidth
                    />
                </div>
                <br/>
                {error && <div>{error}</div>}
                <Button variant="outlined" type="submit">Войти</Button>
                
            </form>
        </div>
    )
}

export default Login