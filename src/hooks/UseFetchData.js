import { useEffect, useState } from 'react'
import { getData } from '../helpers/getData';

export const UseFetchData = (status) => {

    const [data, setData] = useState([]);
    const [loading,setLoading]=useState(true);

    

    useEffect(function () {
        getData(status)
            .then(userData => {
                setData(userData);
                setLoading(false);
            });

            
    }, [status]);

    return {data,loading,setLoading};
}