import React, { Component } from "react";

class Navigation extends Component{
    render(){
        return(
            <div className="navigation">
                {this.props.someText}
            </div>
        );
    }
}

export default Navigation;