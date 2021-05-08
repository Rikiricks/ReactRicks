import ReactDOM from "react-dom";

import React, { Component, Profiler } from "react";



class Department extends React.Component{

  constructor(props){

    super(props);

    this.state={

      list:['Dev','Big Data','Mobility']

    };

  }



  render(){
   return(
     <div>
       <h2>Department List</h2>
      {this.props.render(this.state.list)}   
     </div>
   )

  }

}



class Project extends React.Component{

  constructor(props){

    super(props);    

  }



  render(){

    return(

      <div>

        <h2>Projects List...</h2>

        {this.props.render(["P-1","p-2"])}

      </div>

    );

  }

}



export class RenderPropsDemo extends React.Component{

  constructor(props){

    super(props);

  }

  render(){

    return(

      <React.Fragment>

        <Department render={(data)=><DisplayList list={data}></DisplayList>}></Department>

        <Project render={(data)=><DisplayList list={data}></DisplayList>}></Project>

      </React.Fragment>

    )

  }

}

class DisplayList extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
        return(
        <div>

      
        <ul>

          {this.props.list.map(d=>(

            <li key={d}>{d}</li>

          ))}

        </ul>
        </div>
        );
    }
}
