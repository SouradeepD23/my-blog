//Custom hook to fetch data in general, can be used for all fetch ops

import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortCont = new AbortController();                //AbortController object

        // setTimeout(() => {
            fetch(url, {signal: abortCont.signal})                  //pass AbortController signal as option for fetch
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch valid data'); //throw error for such a case where invalid data is returned as a responsde
                }
                // console.log(res);
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {                                  //catch basically used for connection errors
                // console.log(err.message);
                if(err.name === 'AbortError'){               //update states only if it is not an Abort error
                    console.log('fetch aborted');
                }
                else{                    
                    setError(err.message);
                    setIsLoading(false);
                }
            });
        // }, 1000)

         return () => {                                  //returning cleanup function for unmounting component
            console.log('cleanup func');
            abortCont.abort();
        }
    }, [url]);                                               //add url as useEffect dependency

    return {data, isLoading, error};           //return states
}

export default useFetch;