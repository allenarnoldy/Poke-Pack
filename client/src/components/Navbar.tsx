import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  //const currentPage = useLocation().pathname;
  // TODO Add conditional logic with useState for checking if logged in currently setting a local boolean for login to false
  const loggedIn = true;
  return (
    <nav>
      <Link to='/' id='logo'>
        <img src='.\pokpak_logo.svg' alt='PokePack!' />
      </Link>
      {loggedIn ? (
        <div className='menu'>
          <Link to='/Collection'>COLLECTION </Link>
        </div>
      ) : (
        <></>
      )}
    </nav >
  );
};

export default Navbar;