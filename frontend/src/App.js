import React from 'react';
import {useSelector} from 'react-redux';
import Login from './Views/Login/login';
import './App.css';

function App() {
  const {auth} = useSelector(state => state)
  return (
    <>
    {!auth.LoggedIn ? <Login/>:
    <h1></h1>
    }
    </>
  );
}

export default App;
