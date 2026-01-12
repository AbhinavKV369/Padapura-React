import { useEffect, useState } from "react"

const useFetch = (fetchFunction,dependencies=[]) =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
       const isMounted = true;
        const fetchData = async () => {
          try {
            setLoading(true);
            const result = await fetchFunction();
            if(isMounted) setData(result);
          } catch (error) {
            if(isMounted) setError(error)
          } finally {
            if(isMounted) setLoading(false)
          }
        };
        fetchData();
        return () =>{
            isMounted(false);
        }
    },[dependencies]);
    return {data,loading,error}
}

export default useFetch;