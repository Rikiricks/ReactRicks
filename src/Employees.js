import React from 'react';
import {Salary} from './Salary';

class Employees extends React.Component{
    constructor(props){
      super(props);
      this.state={
        updatedSalary: null
      }
    }
    getUpdatedSalary= (sal) =>
    {
      this.setState({
        updatedSalary: sal
      });
    };
    render(){
      return <div>
      <p>
        Emp Id: <b>{this.props.Id}</b>
      </p>
      <p>
        Emp Name: <b>{this.props.Name}</b>
      </p>
      <p>
        Updated Salary: <b>{this.state.updatedSalary}</b>
      </p>
      <Salary basic={this.props.basic} hra={this.props.hra} onSalaryChange={this.getUpdatedSalary}></Salary>
    </div>
    }
  }

  export default Employees;

  