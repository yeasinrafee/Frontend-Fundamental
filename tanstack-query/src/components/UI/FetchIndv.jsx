import { useQuery } from '@tanstack/react-query';
import { fetchIndvPost } from '../../API/api';
import { NavLink, useParams } from 'react-router-dom';

const FetchIndv = () => {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchIndvPost(id),
  });
  console.log(data);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className='my-10 max-w-[1250px] mx-auto'>
      <div
        key={data.id}
        className='px-5 border-l-8 flex flex-col justify-center border-l-gray-500 space-y-2 shadow-md w-[800px] h-[300px] mx-auto rounded-md'
      >
        <p>{data.id}</p>
        <p className='font-semibold uppercase'>{data.title}</p>
        <p>{data.body}</p>
      </div>
      <NavLink to='/rq'>
        <button>Go Back</button>
      </NavLink>
    </div>
  );
};

export default FetchIndv;
