import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Employees} from './Employees';
import {EmployeeList} from './EmployeeList';
import {EmployeeForm} from './EmployeeForm';
import {EmployeeFormik} from './EmployeFormik';
import {EmpFormikComponent} from './EmpFormikComponent';
import {OrderComponent} from './OrderComponent';
import {VideoPlayer} from './VideoPlayer';
import {AdminDashBoard} from './HOCComponent'
import {ReportsDashboard} from './ReportsDashboard'
import {RenderPropsDemo} from './RenderPropsDemo'
import {EmployeeFunc, EmployeeComponent}  from './EmployeeFunc'
import {UseContextDemo}  from './UseContextDemo'
import {SpeechToTestHook} from './SpeechToTestHook'
import App from './App'
import {RouterDemo} from './RouterDemo'

ReactDOM.render(<App></App>, document.getElementById("root"));
// const elm = <EmployeeFunc></EmployeeFunc>
// const elm = <EmployeeComponent></EmployeeComponent>

// const elm = <RenderPropsDemo></RenderPropsDemo>
// const elm = <UseContextDemo></UseContextDemo>

// const elm = <SpeechToTestHook/>
//const elm = <RouterDemo/>

//ReactDOM.render(elm,document.getElementById("root"));

// const profiler = <ReportsDashboard></ReportsDashboard>
// ReactDOM.render(profiler,document.getElementById("root"));


// const hoc = <AdminDashBoard></AdminDashBoard>;
// ReactDOM.render(hoc,document.getElementById("root"));

// const order = <OrderComponent></OrderComponent>;
// ReactDOM.render(order,document.getElementById("root"));

// const video = <VideoPlayer></VideoPlayer>;
// ReactDOM.render(video,document.getElementById("root"));



// const empFrmkCmp = <EmpFormikComponent></EmpFormikComponent>;
// ReactDOM.render(empFrmkCmp,document.getElementById("root"));

// const empFrmk = <EmployeeFormik></EmployeeFormik>;
// ReactDOM.render(empFrmk,document.getElementById("root"));

// const empFrm = <EmployeeForm></EmployeeForm>;
// ReactDOM.render(empFrm,document.getElementById("root"));

// const empList = <EmployeeList></EmployeeList>;
// ReactDOM.render(empList,document.getElementById("root"));
// const employess = [
//   {id:1, Name:"riki"},
//   {id:2, Name:"ricks"},
//   {id:3, Name:"ricky"}
// ]

// function LoadEmployees(props){
//   const list = props.empList;
//  const listElements = list.map((emp)=>
//     <Employee key={emp.id} data={emp}></Employee>
//  );
//  return <div>
//     {listElements}
//   </div>
// }

// function Employee(emp){
//   return <div>
//     <p>
//       empId: {emp.data.id}
//     </p>
//     <p>
//       name: {emp.data.Name}
//     </p>
//   </div>
// }

// const listElm = <LoadEmployees empList={employess}></LoadEmployees>
// ReactDOM.render(listElm, document.getElementById("root"));
//---With JSX--//
// const elm = <h1 className="testClass">Hola Amigo!</h1>;
// ReactDOM.render(elm, document.getElementById('root'))
// const elm2 = <h1 className="testClass">Hola Hermano!</h1>;
// ReactDOM.render(elm2, document.getElementById('root'))

//---W/O JSX--//
// const elm = React.createElement("div",{className:"testClass"},
// React.createElement("h1", null,"Hola Amigo!"),
// React.createElement("h1", null, "Hola Hermano!"));

// ReactDOM.render(elm,document.getElementById("root"));

// var GetEmployee = (emp) =>
// {
//   return <div>
//     <p>
//       Emp Id: <b>{emp.Id}</b>
//     </p>
//     <p>
//       Emp Name: <b>{emp.Name}</b>
//     </p>
//     <Dept deptName={emp.deptName}></Dept>
//   </div>
// }

// const Dept = (dept) =>
// {
//   return<p>
//     Department: <b>{dept.deptName}</b>
//   </p>;
// }

//  const elementold = <GetEmployee Id="1" Name="Robe" deptName="dev" ></GetEmployee>

// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(props);
//   }
//   render(){
//     return <div>
//     <p>
//       Emp Id: <b>{this.props.Id}</b>
//     </p>
//     <p>
//       Emp Name: <b>{this.props.Name}</b>
//     </p>
//     <Dept deptName={this.props.deptName}></Dept>
//   </div>
//   }
// }

// class Department extends React.Component{
//   render(){
//     return<p>
//     Department: <b>{this.props.deptName}</b>
//   </p>;
//   }
// }



// var element = <Employee Id="1" Name="Robe" deptName="de" ></Employee>

// ReactDOM.render(element, document.getElementById("root"));

// class Student extends React.Component{
//   state ={counter:0,msjLength:0};
//   handleClick = ()=>
//   {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   };
//   onMsjChange = (msj) =>{
//     this.setState({
//       msjLength: msj.length
//     })
//   }
//   render(){
//     return <div>
//       <p>
//         message: <input type="text" onChange={e=>this.onMsjChange(e.target.value)}></input>
//       </p>
//       <p>
//         <button onClick={this.handleClick}>Add Student</button>
//       </p>
//       <p>
//         Count: {this.state.counter} 
//       </p>
//       <p>
//         Msj Length: {this.state.msjLength} 
//       </p>
//     </div>
//   }
// }
// const studentElm = <Student></Student>;
// ReactDOM.render(studentElm, document.getElementById("root"));

// const callBackElm = <Employees Id="1" Name="Robe" basic="7000" hra="7000"></Employees>
// ReactDOM.render(callBackElm, document.getElementById("root"))


// const empContext = React.createContext({
//   data:'',
//   changeEmployee:()=>{}
// });
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       data:{empId: 101},
//       changeEmployee:this.updateId

//     }
//   }
//   updateId = ()=>{
//     this.setState({
//       data:{
//         empId : parseInt(this.state.data.empId)+1
//       }
//     });
//   };

//   render(){
//     return <div>
//       <h2>App Component</h2>
//       <p>
//         Employee Id: {this.state.data.empId}
//         </p>
//         <empContext.Provider value={this.state}>
//         <Emp></Emp>
//         </empContext.Provider>
//         <p>
//           <button onClick={this.updateId}>Update from App</button>
//         </p>  
//     </div>
//   }
// }

// class Emp extends React.Component{
//   static contextType = empContext;
//   // static context = empContext;

//   render(){
//     return <div>
//       <h2>Emp Component</h2>
//       <p>
//         Employee Id: {this.context.data.empId}
//         </p>    
//         <Sal></Sal>
//         <p>
//           <button onClick={this.context.changeEmployee}>Update from Emp</button>
//         </p>    
//     </div>
//   }
// }


// class Sal extends React.Component{
//    static contextType = empContext;
//   // static context = empContext;
  
//   render(){
//     return <div>
//       <h2>Sal Component</h2>
//       <p>
//         Employee Id: {this.context.data.empId}
//         </p>
//         <p>
//           <button onClick={this.context.changeEmployee}>Update from Sal</button>
//         </p>  
             
//     </div>
//   }
// }

// const contextElm = <App></App>;
// ReactDOM.render(contextElm, document.getElementById("root"));