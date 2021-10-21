import React from "react";

class HelloClass extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>{this.props.greeting ? 'Hello' : 'Bye'}, {this.props.name}!</div>
        );
    }
}

export default HelloClass;