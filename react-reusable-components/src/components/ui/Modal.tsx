import { createPortal } from 'react-dom';
import cn from '../../utils/cn';
import { createContext, MouseEvent, useContext, useRef } from 'react';

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};
type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

type TCloseButton = {
  children?: React.ReactNode;
};

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutSideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div>
        <div
          className={cn(
            'fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]',
            {
              visible: isOpen,
            }
          )}
          onClick={handleOutSideClose}
        >
          <div
            ref={containerRef}
            className='bg-white w-full max-w-sm rounded-md p-4'
          >
            {children}
          </div>
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById('portal') as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button className='ml-auto' onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-6 text-red-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className='flex justify-between items-center w-full mb-3'>
      {children}
    </div>
  );
};

Modal.Header = Header;

Modal.CloseButton = CloseButton;

export default Modal;
