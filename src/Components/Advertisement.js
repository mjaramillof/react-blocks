import React, { Component } from "react";

class Advertisement extends Component{
    render(){
        return(
            <>
            <div className="advertisement">
                {this.props.someText}
            </div>
        </>
        );
    }
}

export default Advertisement;