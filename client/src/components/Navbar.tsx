import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <h1>
        <Link to='/' id='logo'>
          PokePack!
        </Link>
      </h1>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              HOME
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/Collection'
              className={
                currentPage === '/Collection' ? 'nav-link active' : 'nav-link'
              }
            >
              COLLECTION
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;