import { useState, useEffect } from "react";

/**
 *  Create a function to fetch the data from an url
 * @Params url: url to the ressource we want to fetch
 * @Params Factory: a factory patterns to be able to use constructor patterns,
 *  to get the data so they are ready to use
 * @Params type: corresponds to the type of the api
 * @return the desired activity data
 * @return isLoading, it will be true until fetch() has finished to load the data
 */

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
