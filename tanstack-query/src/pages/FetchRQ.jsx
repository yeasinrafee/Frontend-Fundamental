import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../API/api';

const FetchRQ = () => {
  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPostData,
  });

  console.log(data);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className='my-10 max-w-[1250px] mx-auto'>
      <ul className='flex flex-col gap-5'>
        {data?.map((post) => {
          const { id, title, body } = post;
          return (
            <li
              key={id}
              className='px-5 py-3 border border-gray-500 space-y-2 shadow w-[800px] mx-auto'
            >
              <p className='font-semibold uppercase'>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRQ;
