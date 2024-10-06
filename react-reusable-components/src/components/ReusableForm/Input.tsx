import { TInput } from '../../types';

export const Input = ({ label, register, errors, type }: TInput) => {
  return (
    <div className='w-full'>
      <label className='block' htmlFor='name'>
        {label}
      </label>
      <input className='w-full' type={type} id='name' {...register} />
      {errors.name && (
        <span className='text-red-500 text-sm'>{errors.name.message}</span>
      )}
    </div>
  );
};
