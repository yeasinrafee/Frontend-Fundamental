import { useEffect, useState } from 'react';
import UserList from './UserList';

const UsersContainer = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setData(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <UserList data={data} loading={loading} error={error} />
    </div>
  );
};

export default UsersContainer;
