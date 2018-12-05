import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2'
import Home from './Home';

class App extends Component {
  render() {
    return (
     
      <Router>
      
        <Fragment>
          <Link to="/">Home Page</Link>
          <Link to="/films">Load Films</Link>
        
          
         
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/films" component={Page1} />
            <Route  exact path='/films/:id' component={Page2} />
          </Switch>
        
        
          </Fragment>
        </Router>
    );
  }
}

export default App;
