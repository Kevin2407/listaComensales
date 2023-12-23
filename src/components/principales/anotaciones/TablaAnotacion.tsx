import { Component } from 'react'
import Selector from './Selector'

type Props = {}

type State = {}

export default class TablaAnotacion extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="col-span-2 overflow-x-auto overflow-y-auto h-96 m-5 mt-auto rounded-xl">
                <table className="table table-xs table-pin-rows table-pin-cols text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Dia</td>
                            <td>Almuerzo</td>
                            <td>Cena</td>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>L</th>
                            <td>Oct 26</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>1</th>
                        </tr>
                        <tr>
                            <th>Ma</th>
                            <td>Oct 27</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>2</th>
                        </tr>
                        <tr>
                            <th>Mi</th>
                            <td>Oct 28</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>3</th>
                        </tr>
                        <tr>
                            <th>J</th>
                            <td>Oct 29</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>4</th>
                        </tr>
                        <tr>
                            <th>V</th>
                            <td>Oct 30</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>5</th>
                        </tr>
                        <tr>
                            <th>S</th>
                            <td>Oct 30</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>5</th>
                        </tr>                        <tr>
                            <th>D</th>
                            <td>Oct 30</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>5</th>
                        </tr>                        <tr>
                            <th>5</th>
                            <td>Oct 30</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>5</th>
                        </tr>                        <tr>
                            <th>5</th>
                            <td>Oct 30</td>
                            <td><Selector></Selector></td>
                            <td><Selector></Selector></td>
                            <th>5</th>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <td>Cena</td>
                            <td>Almuerzo</td>
                            <td>Cena</td>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}