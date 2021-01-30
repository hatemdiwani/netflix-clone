import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import SignIn from './components/SignIn';
import Home from './components/Home';


function App() {




  return (
    
      <Router>
        <Switch>
          <Route exact path="/"><SignIn/></Route>
          <Route path="/signin">
            <SignIn/>
          </Route>

          <Route path="/signup">

          </Route>
          <Route path="/home" >
             <Home/>
          </Route>
        </Switch>
      </Router>

      
   
  );
}

export default App;
