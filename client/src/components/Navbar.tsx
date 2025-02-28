import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './LoginModal';
import Auth from '../utils/auth';
import '../App.css';

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
      {/* Left section: Slogan and logo */}
      <div className="nav-left">
        <div className="nav-slogan">
          <span>Gotta Collect 'em All</span>
        </div>
        <div className="logo-container">
          <img src='./logo.jpeg' alt='PokePack' className="logo" />
        </div>
      </div>

      {/* If logged in, show Crack-A-Pack & Binder */}
      <div className="nav-links">
        {Auth.loggedIn() && (
          <>
            {/* Crack-A-Pack Link */}
            <div className="nav-item">
              <h2>
                <Link to="/" className="nav-link">Crack-A-Pack</Link>
              </h2>
            </div>

            {/* Binder Link */}
            <div className="nav-item">
              <h2>
                <Link to="/Collection" className="nav-link">Binder</Link>
              </h2>
            </div>
          </>
        )}

        {Auth.loggedIn() ? (
          // If logged in, show Logout button
          <div className="nav-item">
            <h2>
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            </h2>
          </div>
        ) : (
          // If not logged in, show Login / Sign Up button
          <div className="nav-item">
            <h2>
              <button onClick={openModal} className="nav-link">
                Login / Sign Up
              </button>
            </h2>
          </div>
        )}
      </div>

      {/* Modal */}
      <LoginModal isOpen={modalVisible} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
