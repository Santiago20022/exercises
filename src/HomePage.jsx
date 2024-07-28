import { useState, useEffect } from 'react'
import './App.css';
import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('');
  const [doubledValue, setDoubledValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setDoubledValue(inputValue * 2);
  }, [inputValue]);
  useEffect(() => {
    const total =  parseInt(count) + parseInt(inputValue);
    setTotalValue(total);
  }, [count, inputValue]);

  
  return (
    <>
      <h1>buttons</h1>
      <div>
        <p>{count}</p>
        <button 
          onClick={() => setCount((count) => count + 1)}
        >
          Add
        </button>
        <button
          onClick={() => setCount(Math.max(count - 1, 0))}
        >
          Substract
        </button>

        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p>Doubled value: {doubledValue}</p>
        <p>Total: {totalValue}</p>
        <Link to="/login">Ir a Login</Link>
      </div>
    </>
  );

}

export default HomePage