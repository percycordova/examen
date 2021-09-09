import React from 'react'
import { Link } from 'react-router-dom';

const DataTable = ({ dataStatic }) => {
    const columns = dataStatic[0] && Object.keys(dataStatic[0]);
   
    
    return (
        <div className="table-responsive-sm">
            {dataStatic && <table className="table">
                <thead>
                    <tr className="col">
                        <th>#</th>
                        {dataStatic[0] &&
                            columns.map(th => <th>{th}</th>)
                        }
                        <th>Cronográma de Pago</th>
                    </tr>
                </thead>
                <tbody>
                    {dataStatic.map((row, index) => (

                        <tr key={row.id}>
                            <th scope="row">{index + 1}</th>
                            {columns.map((column) => (
                                <td>{row[column]}</td>
                            ))}
                            <td>
                                <Link
                                    className="btn btn-outline-info"
                                   to={`/cronograma/userId=${row.idUser}`}
                                >
                                    Cronograma
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    )
}

export default DataTable
