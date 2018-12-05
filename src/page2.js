import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class Page2  extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.match)
    }

render(){
    return(
        <div>
        <div>ID{this.props.match.params.id}</div>
        <div></div>
        </div>
    )
}
}

export default Page2