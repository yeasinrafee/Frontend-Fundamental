import { useState } from 'react';
import Button from './components/ui/Button';
// import MainLayout from './components/layout/MainLayout';
import Container from './components/ui/Container';
import Modal from './components/ui/Modal';

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <div className='h-screen w-full flex justify-center items-center'>
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <p>This is modal title</p>
            <Modal.CloseButton />
          </Modal.Header>
          <h1>This is a Modal</h1>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
