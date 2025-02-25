import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import LoginModal from './LoginModal'; 
import Auth from '../utils/auth'; // Import the Auth utility

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleLogout = () => {
    Auth.logout(); // Logs out user and removes token
    window.location.assign('/'); // Redirects to home after logout
  };

  return (
    <nav>
      <h1>
        <Link to="/" id="logo">
          PokePack!
        </Link>
      </h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <h2>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </h2>
        </li>
        <li className="nav-item">
          <h2>
            <Link to="/Collection" className="nav-link">
              COLLECTION
            </Link>
          </h2>
        </li>

        {Auth.loggedIn() ? (
          // If logged in, show Logout button
          <li className="nav-item">
            <h2>
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            </h2>
          </li>
        ) : (
          // If not logged in, show Login / Sign Up button
          <li className="nav-item">
            <h2>
              <button onClick={openModal} className="nav-link">
                Login / Sign Up
              </button>
            </h2>
          </li>
        )}
      </ul>

      {/* Modal */}
      <LoginModal isOpen={modalVisible} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
