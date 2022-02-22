import React, { Fragment , Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';


if(localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {
  return (
    <AuthState>
    <ContactState>
      <AlertState>
    <Router>
        <>
      <Navbar/>
      <div className=' mt-2'  style={{backgroundColor:'rgb(150, 200, 255)'}}>
        <Alerts/>
         <Switch>
           <PrivateRoute exact path='/' component={Home}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/register' component={Register}/>
           <Route exact path='/login' component={Login}/>
         </Switch>
      </div>
    </>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
    
  );
}

export default App;
