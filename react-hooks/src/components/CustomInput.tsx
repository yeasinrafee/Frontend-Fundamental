import { forwardRef } from 'react';

type TCustomInputProps = {
  className: string;
};

const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, inputRef) => {
    return (
      <input
        ref={inputRef}
        className={className}
        type='text'
        name='name'
        id='name'
      />
    );
  }
);

export default CustomInput;
