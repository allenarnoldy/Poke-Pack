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
        <li className="nav-item">
          <h2>
            <button onClick={openModal} className="nav-link">
              Login / Sign Up
            </button>
          </h2>
        </li>
      </ul>

      {/* Modal */}
      <LoginModal isOpen={modalVisible} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
