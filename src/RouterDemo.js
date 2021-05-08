import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,NavLink, Link, Switch, Route} from 'react-router-dom';
import EmployeeList from './EmployeeList';
import UseContextDemo from './UseContextDemo';
import {NotFound} from './navigation/NotFound';

export function RouterDemo(){
  return(
      <BrowserRouter>
    <div>
      <h2>Welcome to App Component...</h2>
      <ul>
        <li><NavLink to="/" activeClassName="activeClass">Employees</NavLink></li>

        <li><NavLink to="/useContextDemo" activeClassName="activeClass">Use Context Demo</NavLink></li>
      </ul>
      <Switch>
      <Route exact path="/" component={EmployeeList}></Route>
      <Route path="/useContextDemo" component={UseContextDemo}></Route>
      <Route path="**" component={NotFound}></Route>

      </Switch>
      
    </div>
    </BrowserRouter>
  )
}


