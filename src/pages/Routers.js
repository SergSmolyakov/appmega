//import './App.css';
import { List, ListItem } from '@mui/material'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import NotFound from './NotFound';
import Gists from './Gists';
import React from 'react';
import Login from './Login';
import Registration from './Registration';
import RequireAuth from '..//hocs/RequireAuth';

export const MyThemeContext = React.createContext({ theme: 'dark'});
export const DataContext = React.createContext({messages: ['hello', 'buy'] });
export const LocalizationContext = React.createContext('en');

const Routers = () => {
    return(
   <LocalizationContext.Provider value={'en'}>
     <DataContext.Provider value={{messages: ['hello', 'buy'] }}>
       <MyThemeContext.Provider value={{theme: 'dark'}}>
       <header className='App-header'>
    <menu className='horizontalMenu'>
      <List sx={{ width: '100%', maxWidth: 350, display: 'flex', justifyContent: 'space-between' }}>
        <ListItem>
          <Link to='/' className='link'>Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/profile' className='link'>Profile</Link>
        </ListItem>
        <ListItem>
          <Link to='/chats' className='link'>Chats</Link>
        </ListItem>
        <ListItem>
          <Link to='/gists' className='link'>Gists</Link>
        </ListItem>
        <ListItem>
          <Link to='/registration' className='link'>Регистрация</Link>
        </ListItem>
        <ListItem>
          <Link to='/login' className='link'>Вход</Link>
        </ListItem>
      </List>
    </menu>

    <Routes>
      <Route path={'/'} exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/registration' exact element={<Registration />} />
      <Route element={<RequireAuth />}>
      <Route path='/profile' element={<Profile />} />
      <Route path='/gists' element={<Gists />} />
      <Route path='/chats/:chatId' element={<Chats />} />
      </Route>      
      <Route path="*" element={<NotFound />} />
    </Routes>
  </header>
       </MyThemeContext.Provider>
     </DataContext.Provider>
   </LocalizationContext.Provider>
  )
}

export default Routers;
