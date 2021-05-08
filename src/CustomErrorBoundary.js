import React from 'react';

export class CustomErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: null};
    }

    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI.
        return { hasError: true };
      }
      

    componentDidCatch(error,errorInfo){
        console.log(error);
        console.log(errorInfo);
     
    }

    render(){
       if(this.state.hasError){
           return(
               <div><h2>Having problem to load address.</h2></div>
           );
       }
       else{
           return this.props.children;
       }
    }
}