import React, { useEffect, useRef } from 'react';

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <h1 className='text-3xl my-10 text-center font-semibold'>Use Ref</h1>

      <form>
        <input
          className='border border-red-500'
          type='text'
          ref={myRef}
          name='name'
          id='name'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
