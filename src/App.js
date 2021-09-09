import React, { useState } from 'react'

import DataTable from './components/dataTable/DataTable';
import Filters from './components/Filters/Filters';
import Spinner from './components/spinner/Spinner';
import { UseFetchData } from './hooks/UseFetchData';

function App() {


  const [form, setForm] = useState({});

  const { data, loading, setLoading } = UseFetchData(form.status);


  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
    setLoading(true);
  }


  return (

    <div >
      <h2 className="m-3">Filtro de Datos</h2>
      <Filters handleChange={handleChange} />

      {
        (loading) ? <>
          <div className="alert alert-info">Loading...</div>
          <Spinner />
        </>
          : <DataTable dataStatic={data} />
      }
    </div>

  );
}

export default App;



