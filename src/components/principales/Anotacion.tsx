import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Anotacion extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="grid grid-cols-1 divide-x sm:grid-cols-2">
                <div>
                    <div>
                        <h1>Hoy</h1>
                    </div>
                    <div>
                        <p>Almuerzo: come</p>
                        <p>Cena: no come</p>
                    </div>
                    <div>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th>Cómo anotarse</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>•</td>
                                    <td>Horario normal</td>
                                </tr>
                                <tr>
                                    <td>T</td>
                                    <td>Horario Tarde</td>
                                </tr>
                                <tr>
                                    <td>A</td>
                                    <td>Almuerzo Antes</td>
                                </tr>
                                <tr>
                                    <td>V</td>
                                    <td>Vianda</td>
                                </tr>
                                <tr>
                                    <td>X</td>
                                    <td>No Almuerzo/Ceno</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p>Para tener en cuenta:
                            • El almuerzo es a las 13:15
                            • La cena es a las 20:45
                            • Las viandas se piden con un dia de anticipación. Anotarlas en el cuaderno.
                            • Es importante ser puntual.
                            • Cuando la comida es en el comedor, hay que ir de pantalón largo.
                            • Los comensales se piden a las 8:30 hs. Pasado dicho horario, no podra ser modificada la Lista.</p>
                    </div>
                </div>
                <div>02</div>
            </div>
        )
    }
}