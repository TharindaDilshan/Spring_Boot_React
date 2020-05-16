import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Table from './components/Table';
import EditEmployee from './components/EditEmployee';

class App extends Component{
  render(){
    return(
      <Router>
        <Route exact path='/' component = {AddEmployee} />
        <Route exact path='/view' component = {Table} />
        <Route exact path='/edit/:id' component={EditEmployee} />
      </Router>
    );
  }
}
export default App;
