import React, { Component } from 'react';

class ErrorBoundary extends Component{
    state = {
        haserrors: false,
        errormessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({haserrors: true, errormessage: error});
    }
    render() {  
        if (this.state.haserrors){
               return( <h1>Something went wrong {this.state.errormessage}</h1>);
        }
        else{
               return this.props.children;
        }
    }

}

export default ErrorBoundary