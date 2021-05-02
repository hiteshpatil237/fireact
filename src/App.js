import React from 'react'
import Header from './Header'
import './App.css'
import './firebase/config'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Signup from './pages/Signup'
import { UserProvider } from './firebase/UserProvider'

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;