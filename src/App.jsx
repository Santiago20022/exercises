import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Homepage from './HomePage';
import Login from './Login';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App