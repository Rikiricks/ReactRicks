import React from 'react';
import { useState, useEffect } from "react";
import { Link, NavLink, Switch, Route, Redirect } from 'react-router-dom';

const auth = {
  isAuthorized : true
}

function EmployeeSalaryInfo(props) {
function goToInfo(){
  props.history.replace("/employees")
}
  return (
    <>
    <h2>Employee Salary Details...</h2>
    <button onClick={goToInfo}>Personal Detail</button>
    </>
  );
}


function EmployeeProjectInfo(props) {
  function goToInfo(){
    props.history.push("/employees")
  }
  return (
    <>
    <h2>Employee Project Details...</h2>
    <button onClick={goToInfo}>Personal Detail</button>

    </>
  );
}

function EmployeePersonalInfo(props) {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetch("https://localhost:44314/employee/" + props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          debugger;
          setEmployee(result);
        }
      );
  }, []);
  function changeEmployeeData(e) {

  }
  function goBack()
  {
    props.history.goBack();
  }
  return (
    <div>
      <h2>Employee Details...</h2>
      <p>
        <label>Employee ID : <input type="text" name="Id"
          value={employee.id} onChange={changeEmployeeData}></input></label>
      </p>
      <p>
        <label>Employee Name : <input type="text" name="Name"
          value={employee.name} onChange={changeEmployeeData}></input></label>
      </p>
      <p>
        <label>Employee Location : <input type="text" name="Location"
          value={employee.location} onChange={changeEmployeeData}></input></label>
      </p>

      <button>Update</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

function EditEmployee(props) {
  return (
    <div>
      <Link to={"/employee/" + props.match.params.id}>Personal</Link> &nbsp;&nbsp;
      <NavLink to={"/employee/" + props.match.params.id + "/salary"} activeClassName="testClass">Salary</NavLink>&nbsp;&nbsp;
      <NavLink to={"/employee/" + props.match.params.id + "/project"} activeClassName="testClass">Projects</NavLink>
      <Switch>
        <Route exact path="/employee/:id" component={EmployeePersonalInfo}></Route>
        {/* <Route path={props.match.url + "/salary"} component={EmployeeSalaryInfo}></Route> */}
        <SecuredRoute path={props.match.url + "/salary"} component={EmployeeSalaryInfo}></SecuredRoute>
        {/* <Route path={props.match.url + "/project"} component={EmployeeProjectInfo}></Route> */}
        <SecuredRoute path={props.match.url + "/project"} component={EmployeeProjectInfo}></SecuredRoute>

      </Switch>

    </div>
  );

}

function SecuredRoute(props){
  return(
    <Route path={props.path} render={data => auth.isAuthorized ? 
    (<props.component {...data}></props.component>):
    (<Redirect to={{pathname:"/"}}></Redirect>)
    }></Route>
  );
}

export default EditEmployee