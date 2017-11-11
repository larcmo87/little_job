import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav';
import Main from './Main';


const App = () =>{
  return(
  <div className="App">
        <NavBar />
        
        <div className="container-fluid">         
          <Main />
        </div> {/* end overall container */}
  </div>
  )


}

export default App;
