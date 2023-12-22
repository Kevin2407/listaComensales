import { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

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
                            <div className="font-sans text-3xl">
                                Este texto usa la fuente Montserrat (Regular).
                            </div>

                            <div className="font-serif text-5xl">
                                Este texto usa la fuente Eczar (Regular).
                            </div>

                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </>
        )
    }
}