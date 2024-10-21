import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { deletePost, fetchPosts, updatePost } from '../API/api';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['posts', pageNumber], // useState
    queryFn: () => fetchPosts(pageNumber), // useEffect
    placeholderData: keepPreviousData,
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(['posts', pageNumber], (curElem) => {
        return curElem?.filter((postId) => postId.id !== id);
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(['posts', pageNumber], (curElem) => {
        return curElem?.filter((postId) => postId.id !== id);
      });
    },
  });

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
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p className='font-semibold uppercase'>{title}</p>
                <p>{body}</p>
              </NavLink>
              <div className='flex items-center gap-5'>
                <button
                  onClick={() => deleteMutation.mutate(id)}
                  className='bg-gray-500 text-white px-3 py-1'
                >
                  Delete
                </button>
                <button
                  onClick={() => deleteMutation.mutate(id)}
                  className='bg-gray-500 text-white px-3 py-1'
                >
                  Update
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className='flex justify-center items-center gap-5 my-7'>
        <button
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 3)}
          className='bg-gray-500 text-white px-3 py-1'
        >
          Prev
        </button>
        <p>{pageNumber / 3 + 1}</p>
        <button
          onClick={() => setPageNumber((prev) => prev + 3)}
          className='bg-gray-500 text-white px-3 py-1'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchRQ;
