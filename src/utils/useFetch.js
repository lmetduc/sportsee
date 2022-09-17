import { useState, useEffect } from "react";

function useFetch(url, Factory, type) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        const sessionData = new Factory(response.data, type);
        setData(sessionData);
      })
      .catch((err) => console.log(err));
  }, [url, Factory, type]);

  return [data, isLoading];
}

export default useFetch;
