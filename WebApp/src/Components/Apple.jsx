import React from "react";

class Apple extends React.Component{
    
    render(){
        const { type,color} = this.props;
        return(
            <h1>I am {color} {type} Apple</h1>
        )
    }
}

export default Apple;