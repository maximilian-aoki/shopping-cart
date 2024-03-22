import { useState, useEffect } from 'react';

export default function useCoffeeFetch() {
  const [storeData, setStoreData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function getData() {
      const request = new Request('https://fake-coffee-api.vercel.app/api', {
        mode: 'cors',
      });

      try {
        const response = await fetch(request);
        if (response.status >= 400) {
          throw new Error('Server Error');
        }

        const rawData = await response.json();

        if (!ignore) {
          setStoreData(rawData);
          setError(null);
          setLoading(false);
        }
      } catch (error) {
        if (!ignore) {
          setStoreData(null);
          setError(error);
          setLoading(false);
        }
      }
    }

    getData();

    return () => {
      ignore = true;
    };
  }, []);

  return { storeData, error, loading };
}
