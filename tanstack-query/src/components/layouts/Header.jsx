import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex justify-around items-center my-5'>
      <div>
        <h1 className='text-2xl'>TanStack Query</h1>
      </div>
      <div>
        <ul className='flex gap-5'>
          <li className='text-base underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-base underline'>
            <Link to='/rq'>FetchRQ</Link>
          </li>
          <li className='text-base underline'>
            <Link to='/infinite'>InfiniteScroll</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
