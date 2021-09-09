import React from 'react'
import { UseFetchCronograma } from '../../hooks/UseFetchCronograma';
import Spinner from '../spinner/Spinner';

const CronogramaTable = () => {
    

    const { data, loading } = UseFetchCronograma();
    const columns = data[0] && Object.keys(data[0]);
    
    return (
        <>{

            (!loading)
                ? <div className="table-responsive-sm">
                    <h1 className="text-center m-3">Cronograma</h1>
                    {data && <table className="table">
                        <thead>
                            <tr className="col">
                                <th>#</th>
                                {data[0] &&
                                    columns.map(th => <th>{th}</th>)
                                }

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (

                                <tr key={row.id}>
                                    <th scope="row">{index + 1}</th>
                                    {columns.map((column) => (
                                        <td>{row[column]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    }
                </div>
                : 
                <>
                <div className="alert alert-info">Loading...</div>
                <Spinner />
               </>
        }

        </>
    )

}

export default CronogramaTable;

