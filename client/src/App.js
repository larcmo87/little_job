import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import Main from './Main';
import Footer from './components/Footer';


const App = () =>{
  return(
  <div className="App">
        <Jumbotron />
        
        <div className="container-fluid">         
          <Main />
        </div> {/* end overall container */}

 	<Footer/>
  </div>
  )


}

export default App;
