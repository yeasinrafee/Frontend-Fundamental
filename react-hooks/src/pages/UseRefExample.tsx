import { useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <h1 className='text-3xl my-10 text-center font-semibold'>Use Ref</h1>

      <form>
        <CustomInput ref={myRef} className='border border-blue-700' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
