import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../services/firebase";
import { Link } from "react-router-dom";


const Registration = () => {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password);
        } catch {
            setError(error.message);
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Регистрация аккаунта</h1>
                <p>Введите логин и пароль для регистрации</p>
                <div>
                    <TextField
                    type = 'email'
                    name = 'email'
                    value={email}
                    onChange={handleEmail}
                    placeholder={'Введите ваш Email'}
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
                <Button variant="outlined" type="submit">Регистрация пользователя</Button>
                <p>Если у вас уже есть аккаунт то перейдите по ссылке <Link to='/login'>Логин</Link></p>
            </form>
        </div>
    )
}

export default Registration