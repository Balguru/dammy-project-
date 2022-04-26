import logo from './logo.svg';
import './App.css';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import React from 'react';

const  App =()=> {
  return (
    <div >
      <Header/>
    <center>
    <h1 style={{color:"green"}}> THIS IS  REACT REDUX APPLICATION </h1>
    <Contacts />
    </center>
    </div>
  );
}

export default App;
