import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Employees from '../Employees'
import { NavLinks } from './NavLinks'
import EmployeeList from '../EmployeeList';
import UseContextDemo from '../UseContextDemo';
import {NotFound} from './NotFound'
import EditEmployee from '../EditEmployee';

 
export const RouterConfig = () =>{
    return(
        <>
         <Switch>
         <Route exact path="/" component={NavLinks}></Route>
         <Route path="/employees" component={EmployeeList}></Route>
         <Route path="/useContextDemo" component={UseContextDemo}></Route>
         <Route path="/employee/:id" component={EditEmployee}></Route>
         <Route path="**" component={NotFound}></Route>
        </Switch>
      </>
    );
}