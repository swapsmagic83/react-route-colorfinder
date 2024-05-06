import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ColorRoutes from './ColorRoutes';
import ColorForm from './ColorForm';

function App() {
  const [colors,setColors] = useState(['red','green'])


  const addColor = (newColor) =>{
    setColors(colors =>[newColor, ...colors])
   
  }
  return (
    <div className="App">
      <BrowserRouter>
      <ColorRoutes colors={colors} addColor={addColor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
