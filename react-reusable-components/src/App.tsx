import Button from './components/Button';
// import MainLayout from './components/layout/MainLayout';
import Container from './components/ui/Container';

function App() {
  return (
    <Container>
      <div className='h-screen w-full flex justify-center items-center'>
        <Button outline={true} />
      </div>
    </Container>
  );
}

export default App;
