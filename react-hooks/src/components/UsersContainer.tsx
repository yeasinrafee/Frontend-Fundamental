import UserList from './UserList';
import useUsersData from '../hooks/useUsersData';

const UsersContainer = () => {
  const { data, loading, error } = useUsersData();
  return (
    <div>
      <UserList data={data} loading={loading} error={error} />
    </div>
  );
};

export default UsersContainer;
