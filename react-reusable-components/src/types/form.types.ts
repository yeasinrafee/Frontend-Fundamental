import { FieldValues, SubmitHandler } from 'react-hook-form';

export type TForm = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double?: boolean;
};
