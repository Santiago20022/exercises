import { Routes, Route } from "react-router-dom";
import React from 'react';
import Homepage from './pages/HomePage';
import Login from './pages/Login';
import UserDetail from './pages/UserDetail'
import Dasboard from "./pages/Dasboard";
function App(){
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route
        element={<UserDetail />}
        path="/users/"
      />
      <Route path="/dasboard" element={<Dasboard />}/>
      </Routes>
  )
}

export default App

