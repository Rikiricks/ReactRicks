import React from 'react';

export class Salary extends React.Component{
    constructor(props){
      super(props);
      this.state={
        basic: this.props.basic,
        hra: this.props.hra
      }
    }
    updateSalary=()=>{
      let salary = parseInt(this.refs.basic.value) + parseInt(this.refs.hra.value);
      this.props.onSalaryChange(salary);
    }
    render(){
      return <div> <p>
      Basic: <input type="text" ref="basic" defaultValue={this.state.basic}></input>
    </p>
    <p>
      HRA: <input type="text" ref="hra" defaultValue={this.state.hra}></input>
    </p>  
    <p>
      <button onClick={this.updateSalary}>Update</button>
    </p>
  </div>;
    }
  }