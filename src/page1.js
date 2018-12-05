import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Page2 from './page2'
class Page1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            films: [],
    
        }
    }



    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
          .then(res => res.json())
          .then(films => {
            this.setState({
              films: films,
            })
          });
    
      }

    render(){
        return(
            <div className="App">
            <ul>
             
                 {this.state.films.map(movie => (
                  <div className="card" key={movie.id}>
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <Link to={`/films/${movie.id}`}><button>Load Film info</button></Link>
                  </div>
                </div>
                 ))}
            </ul>
        
           </div>
        )
    }
}

export default Page1