import { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Anotacion from './components/principales/anotaciones/Anotacion';

type Props = {}

type State = {}

export default class App extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <Router>
                    <Nav></Nav>
                    <div className='container px-10 mx-auto my-10 bg-gray-light rounded-2xl'>
                        <Switch>
                            <Route exact path='/'>
                                <Anotacion></Anotacion>
                            </Route>
                        </Switch>
                    </div>
                    <Footer></Footer>
                </Router>
            </>
        )
    }
}