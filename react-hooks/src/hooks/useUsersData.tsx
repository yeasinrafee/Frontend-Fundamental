import { useEffect, useState } from 'react';

const useUsersData = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      setLoading(false);
      setData(data);
      console.log(data);
      console.log('hello');
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
    return () => {
      controller.abort();
    };
  }, []);
  return { data, loading, error };
};

export default useUsersData;
