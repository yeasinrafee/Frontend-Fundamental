import { ChangeEvent, useReducer } from 'react';

type TAction = {
  type: string;
  payload: string;
};
const initialState = {
  name: '',
  email: '',
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case 'addName':
      return { ...currentState, name: action.payload };
    case 'addEmail':
      return { ...currentState, email: action.payload };
    default:
      return currentState;
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h1 className='text-3xl my-10 text-center font-semibold'>Use Reducer</h1>

      <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto'>
        <label> Name: </label>
        <input
          onChange={(e) =>
            dispatch({ type: 'addName', payload: e.target.value })
          }
          type='text'
          name='name'
          className=' border-2'
        />
        <label> Email: </label>
        <input
          onChange={(e) =>
            dispatch({ type: 'addEmail', payload: e.target.value })
          }
          type='text'
          name='email'
          className=' border-2'
        />
        <button
          type='submit'
          className='text-white bg-gray-800 px-5 py-2 uppercase my-5 hover:bg-gray-500 hover:duration-200'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseReducerExample;
