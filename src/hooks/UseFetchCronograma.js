import { useEffect, useState } from 'react'
import { getCronograma } from '../helpers/getCronograma';


export const UseFetchCronograma = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        getCronograma()
            .then(cronogramaData => {
                setData(cronogramaData);
                setLoading(false);
            });

    }, []);

    return { data, loading, setLoading };
}