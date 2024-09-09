import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import Login from './login/Login';
import SignUp from './signup/SignUp'

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
