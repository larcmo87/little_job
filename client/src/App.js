import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron';
import Main from './Main';
import Footer from './components/Footer';
import NAV from './components/Nav';


const App = () =>{
  return(
  <div className="App">
  		   <NAV /> 
        <Jumbotron />
        
        <div className="container-fluid">         
          <Main />
        </div> {/* end overall container */}

 	<Footer/>
  </div>
  )


}

export default App;
