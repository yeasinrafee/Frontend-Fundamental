import { useForm } from 'react-hook-form';
import cn from '../../utils/cn';
import Button from '../ui/Button';

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const double = true;
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className={cn(' max-w-5xl p-5 mx-auto', {
          'max-w-5xl': double,
          'max-w-lg': !double,
        })}
      >
        <div
          className={cn(' grid grid-cols-1 justify-items-center gap-5', {
            'md:grid-cols-2': double,
          })}
        >
          <div className='w-full'>
            <label className='block' htmlFor='name'>
              Name
            </label>
            <input
              className='w-full'
              type='text'
              id='name'
              {...register('name')}
            />
          </div>
          <div className='w-full'>
            <label className='block' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full'
              type='text'
              id='email'
              {...register('email')}
            />
          </div>
          <div className='w-full'>
            <label className='block' htmlFor='password'>
              Password
            </label>
            <input
              className='w-full'
              type='password'
              id='password'
              {...register('password')}
            />
          </div>
        </div>

        <div
          className={cn('grid grid-cols-1 justify-items-center gap-5 my-8', {
            'md:grid-cols-2': double,
          })}
        >
          <div className='w-full max-w-lg col-start-1 md:col-start-2 flex justify-end'>
            <Button className='w-full md:w-fit' type='submit'>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NormalForm;
