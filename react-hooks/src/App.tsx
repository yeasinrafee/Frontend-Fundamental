// import UseReducerExample from './pages/UseReducerExample';
import { useContext } from 'react';
// import UseRefExample from './pages/UseRefExample';
import { ThemeContext } from './context/ThemeProvider';

function App() {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <>
      {/* <UseReducerExample /> */}
      {/* <UseRefExample /> */}
      <div
        className={`w-full h-screen flex justify-center items-center ${
          dark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <button
          onClick={() => setDark(!dark)}
          className='bg-purple-500 text-white px-4 py-2 rounded'
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default App;
