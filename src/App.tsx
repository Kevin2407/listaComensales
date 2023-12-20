import { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

type Props = {}

type State = {}

export default class App extends Component<Props, State> {
  state = {}

  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <h1>hola</h1>
                </Route>
            </Switch>
        </Router>
    )
  }
}