import { Component } from 'react'
import Selector from './Selector'
import TablaAnotacion from './TablaAnotacion'

type Props = {}

type State = {}

export default class Anotacion extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        <div className='m-10'>
                            <div>
                                <h1 className=' font-serif text-5xl'>Hoy</h1>
                            </div>
                            <div>
                                <p><span className='font-serif font-bold'>Almuerzo</span>: come</p>
                                <p><span className='font-serif font-bold'>Cena</span>: no come</p>
                            </div>
                            <div className='mt-5 min-w-11 border border-gray rounded-2xl w-80 overflow-hidden'>
                                <table className="table table-auto">
                                    <thead>
                                        <tr>
                                            <th className='text-gray-light bg-red text-lg' colSpan={2}>Cómo anotarse</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='font-black text-4xl'>•</td>
                                            <td>Horario normal</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold text-2xl' >T</td>
                                            <td>Horario Tarde</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold text-2xl'>A</td>
                                            <td>Almuerzo Antes</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold text-2xl'>V</td>
                                            <td>Vianda</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold text-2xl'>X</td>
                                            <td>No Almuerzo/Ceno</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                            <TablaAnotacion></TablaAnotacion>
                    </div>
                    <div className='mx-12 pb-14'>
                        <p className=' font-serif font-bold text-lg'>Para tener en cuenta:</p>
                        <ul className='list-disc ml-5'>
                            <li>El almuerzo es a las 13:15</li>
                            <li>La cena es a las 20:45</li>
                            <li>Las viandas se piden con un dia de anticipación. Anotarlas en el cuaderno.</li>
                            <li>Es importante ser puntual.</li>
                            <li>Cuando la comida es en el comedor, hay que ir de pantalón largo.</li>
                            <li>Los comensales se piden a las 8:30 hs. Pasado dicho horario, no podra ser modificada la Lista.</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}