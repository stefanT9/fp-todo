import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try{
        const res = await fetch(url);
        setIsPending(false);
        setData(await res.json());
      } catch(err){
        setIsPending(false);
        setError(err);
      }
    })();
  }, [url]);

  return {
    isPending,
    data,
    error
  }
}