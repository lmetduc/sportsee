import { useState, useEffect } from "react";


//function useFetch (url, Factory, type) {
function useFetch (url) {
  const [data, setData] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 // const [error, setError] = useState(null);

  useEffect(() => {

      fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response.data)
        setIsLoading(false)
        //const sessionData = new Factory(response.data,type);
        //sessionData(response.data,type)
    })
      .catch((err) => console.log(err));

  }, [url]);

  //  }, [url, Factory, type]);

  return [data, isLoading];
};

export default useFetch;
