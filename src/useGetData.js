import { useEffect, useState } from "react";

const useGetData = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ err, setErr ] = useState(null);

    //fetch the data from server
    useEffect(() => {
        //use Abort controller to clean up
        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
        .then(res => {
            if (!res.ok){
                throw Error('Could not fetch data');
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
            setErr(null);
        })
        .catch(err => {
            if (err.name === 'AbortError'){
                console.log(err);
            }else{
                setLoading(false);
                setErr(err.message);
            }
        });
        //useEffect clean up
        return () => abortController.abort;
    }, [url]);

    return {data, loading, err}

}

export default useGetData;