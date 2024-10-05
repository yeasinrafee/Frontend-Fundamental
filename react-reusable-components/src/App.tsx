import Button from './components/Button';
// import MainLayout from './components/layout/MainLayout';
import Container from './components/ui/Container';

function App() {
  return (
    <Container>
      <div className='h-screen w-full flex justify-center items-center'>
        <Button variant={'outline'} className='w-2/6'>
          Click
        </Button>
      </div>
    </Container>
  );
}

export default App;
