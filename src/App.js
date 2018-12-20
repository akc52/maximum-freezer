import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom"
import axios from "axios"
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'
import { getToken } from './services/tokenService'

import Typography from '@material-ui/core/Typography'

class App extends Component {
  state = {
    user: null,
    company: "Daily Bread"
  };

  componentDidMount() {
    // When the app loads, try and get the current user
    this.getCurrentUser()
  }

  setUser = user => {
    // Set the current user into state.
    this.setState({ user })
  };

  getCurrentUser = async () => {
    // 1. Try and retrieve the user's token
    const token = getToken()
    // 2. If they have a token, make a request to /user/current for their user details
    console.log("getCurrentUser", token)
    if (token) {
      try {
        const res = await axios.get('/user/current', {
          headers: {
            // 3. Pass the token as an Authorization Header
            Authorization: `Bearer ${token}`
          }
        })
        // 4. If a successful response returns, store the user in state.
        this.setUser(res.data)
      } catch (e) {
        console.log(e)
      }
    }
  };
  render() {
    // 1. Add React-Router to control what view the user sees
    // 2. If there is an active user in state, send them to the dashboard.
    // 3. If there's no user, send them to the login screen.
    // 4. If a logged in user tries to hit the login screen, redirect them to the dashboard.
    return (
      <div className="App">
        <Header />
        <Typography component="h1" variant="h1" gutterBottom>
        { this.state.company } Freezer Inventory
        </Typography>
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                this.state.user ?
                  <Dashboard setUser={this.setUser} />
                :
                  <Redirect to="/login" />
              )}
            />
            <Route
                exact
                path="/login"
                render={() =>
                    this.state.user ? <Redirect to="/" /> : <Login getCurrentUser={this.getCurrentUser} />
                }
            />
            <Route
              path="/signup"
              render={() => (
                this.state.user ?
                  <Redirect to="/" />
                :
                  <Signup setUser={this.setUser} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
