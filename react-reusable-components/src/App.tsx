import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from './components/ReusableForm';
import Container from './components/ui/Container';

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      <Form
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <Input
            type='name'
            register={register('name')}
            errors={errors}
            label='Name'
          />
          <Input
            type='email'
            register={register('email')}
            errors={errors}
            label='Email'
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
