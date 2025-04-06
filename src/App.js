//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');

    }
    else {
      setMode('light');
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
       {/*<About/>*/}
      </div>

    </>
  );
}

export default App;
