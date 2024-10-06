import { FieldValues, SubmitHandler } from 'react-hook-form';

export type TForm = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double?: boolean;
};

export type TInput = {
  label: string;
  register: string;
  errors: string;
  type: string;
};
