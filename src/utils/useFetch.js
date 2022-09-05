import { useState, useEffect } from "react";

function useFetch (url) {
      const [data, setData] = useState(null);
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {

          fetch(url)
          .then(response => response.json())
          .then(response => {
            setData(response.data)
            setIsLoading(false)
        })
          .catch((err) => console.log(err));

      }, [url]);

      return [data, isLoading];
};

export default useFetch;