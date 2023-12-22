import { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Anotacion from './components/principales/Anotacion';

type Props = {}

type State = {}

export default class App extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <Router>
                    <Nav></Nav>
                    <Switch>
                        <Route exact path='/'>
                            <Anotacion></Anotacion>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </>
        )
    }
}