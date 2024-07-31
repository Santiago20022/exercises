import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Homepage from './HomePage';
import Login from './pages/Login';
import UserDetail from './pages/UserDetail'
import Dasboard from "./pages/Dasboard";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/dasboard" element={<Dasboard />}/>
        <Route
        element={<UserDetail />}
        path="/users/:userId"
      />
      </Routes>
    </BrowserRouter>
  )
}

export default App