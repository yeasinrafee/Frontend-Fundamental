const UserList = ({ data, loading, error }) => {
  if (loading && !error) {
    <div>
      <p>Loading...</p>
    </div>;
  }
  if (error) {
    <div>
      <p>Something went wrong</p>
    </div>;
  }
  return <div>{data && data.map((user) => <h2>{user.name}</h2>)}</div>;
};

export default UserList;
