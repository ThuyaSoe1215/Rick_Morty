import { useState, useEffect } from "react"

export function useFetchData(apiEndpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    try {
        (async () => {
          setIsLoading(true);
          const response = await fetch(apiEndpoint);
          const data = await response.json();
          if (isMounted) {
            setData(data.results);
          }
          setIsLoading(false);
        })();
    } catch (error) {
      setIsLoading(false);
      console.log(error)
    }
    return () => isMounted = false;
  }, []);

  return { data, isLoading };
}