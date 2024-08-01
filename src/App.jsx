import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Homepage from './pages/HomePage';
import Login from './pages/Login';
import UserDetail from './pages/UserDetail'
import Dasboard from "./pages/Dasboard";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dasboard" element={<Dasboard />}/>
        <Route path="/HomePage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route element={<UserDetail />} path="/users/:userId" />
      </Routes>
    </BrowserRouter>
  )
}

export default App