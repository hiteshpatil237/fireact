import React from 'react'
import Header from './Header'
import './App.css'
import './firebase/config'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="app">
        <div className="ui grid container">
          <Switch>
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;