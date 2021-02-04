import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Clock from './components/clock/clock';
import Contact from './components/contact/contact';
import Navigation, {  } from "./components/navigation/navigation";
import {Route, Switch  } from "react-router-dom";
import NoMatch from "./components/nomatch/nomatch";
import Jeopardy from "./components/jeopardy/jeopardy";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navigation />
          <Switch>
          <Route exact path='/' render={(props) => <Welcome {...props} name='kyle'/>} />
          <Route path='/Welcome/:name' render={(props) => <Welcome {...props} />} />
          <Route path='/clock' component={Clock} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Jeopardy' component={Jeopardy} />
          <Route>
            <NoMatch />
          </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;