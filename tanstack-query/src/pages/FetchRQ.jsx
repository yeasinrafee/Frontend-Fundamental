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
    queryKey: ['posts'], // useState
    queryFn: getPostData, // useEffect
    // gcTime: 1000,
    // staleTime: 10000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
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
              className='px-5 py-3 border-l-8 border-l-gray-500 space-y-2 shadow-md w-[800px] mx-auto rounded-md'
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
