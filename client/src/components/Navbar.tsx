import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <nav>
      <h1>
        <Link to='/' id='logo'>
          <img src='.\pokpak_logo.svg' alt='PokePack!' />
        </Link>
      </h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <h2>
            <Link to="/Collection" className="nav-link">
              COLLECTION
            </Link>
          </h2>
        </li>
        <li className="nav-item">
            <button onClick={openModal} className="nav-link">
              Login / Sign Up
            </button>
        </li>
      </ul>

      {/* Modal */}
      <LoginModal isOpen={modalVisible} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
