import { useForm } from 'react-hook-form';
import cn from '../../utils/cn';
import Button from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TNormalForm } from './validaton';

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

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
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className='text-red-500 text-sm'>
                {errors.name.message}
              </span>
            )}
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
            {errors.email && (
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className='w-full'>
            <label className='block' htmlFor='password'>
              Password
            </label>
            <input
              className='w-full'
              type='password'
              id='password'
              {...register('password', { minLength: 8 })}
            />
            {errors.password && (
              <span className='text-red-500 text-sm'>
                {errors.password.message}
              </span>
            )}
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
