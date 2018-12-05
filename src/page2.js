import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class Page2  extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
    }

render(){
    return(
        <div>{this.props.match.params.id}</div>
    )
}
}

export default Page2