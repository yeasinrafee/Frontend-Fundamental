import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchUsers } from '../API/api';
import { useEffect } from 'react';

const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchNextPage } =
    useInfiniteQuery({
      queryKey: ['users'],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;

    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasNextPage]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error</p>;

  return (
    <div className='my-10 max-w-[1250px] mx-auto'>
      <h1 className='text-2xl font-semibold text-center uppercase my-8'>
        Infinite sCroll
      </h1>

      {data?.pages?.map((page, index) => (
        <ul className='flex flex-col gap-5' key={index}>
          {page.map((user) => (
            <li
              className='px-5 py-3 border-l-8 border-l-gray-500 space-y-2 shadow-md w-[800px] mx-auto rounded-md'
              key={user.id}
              style={{ padding: '10px', border: '1px solid #ccc' }}
            >
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ))}

      {isFetchNextPage && <div>Loading more...</div>}
    </div>
  );
};

export default InfiniteScroll;
