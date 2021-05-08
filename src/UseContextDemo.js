import ReactDOM from "react-dom";
import React, { Component, useState, useContext } from "react";
import { EmployeeComponent } from "./EmployeeFunc";

const employeeContext=React.createContext();

function UseContextDemo(){

  const [employee,setEmployee]=useState({Id:101,Name:'Pragim',
                                Location:'Bangalore',Salary:12345, Type:"1"});

  function updateEmployee(val){
    debugger;
      setEmployee({...employee,Salary:val});
  }
  function changeType(target){
    setEmployee({...employee, Type:target.value})
  }
  return(
    <div>
      <h2>Welcome to App Component...</h2>
      <p>
        <b>Salary: </b> {employee.Salary}
      </p>
      <p>
      <select value={employee.Type} onChange={changeType}>
        <option value="1">Permanent</option>
        <option value="2">Contract</option>
      </select>
      </p>
    <employeeContext.Provider value={{data:employee, updateEmp: updateEmployee}}>
        <Employee></Employee>
    </employeeContext.Provider>
    </div>
  );
}

function Employee(){
 var context = useContext(employeeContext);

  return(
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>Employee ID : <b>{context.data.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{context.data.Name}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.data.Salary}</b></label>
      </p>
      <employeeContext.Consumer>
        {value=>value.data.Type == 1 ? <Permanent/> : <Contract/>}
      </employeeContext.Consumer>
      <Salary></Salary>
    </div>
  );
}

function Salary(){
  let context=useContext(employeeContext);
  function updateEmployee(){
    
    context.updateEmp(refVal.current.value);
  }
  var refVal = React.createRef();
  return(
    <div>
      <h2>Welcome to Salary Component...</h2>
      <p>
        <label>Employee ID : <b>{context.data.Id}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.data.Salary}</b></label>
      </p>
      <p>
        <input type="texy" value={context.data.Salary} ref={refVal} onChange={updateEmployee}></input>
      </p>
    </div>
  );
}

const Permanent = () =>{
 return(
<div>
  <h2>Permanent</h2>
</div>
 ); 
}

const Contract = () =>{
  return(
 <div>
   <h2>Contract</h2>
 </div>
  ); 
 }

 export default UseContextDemo;