//import LoginModal from "../components/LoginModal";
import Auth from '../utils/auth';
import OpenPack from "../components/OpenPack";

const Home = () => {

  return (
    <>
      {/* Show the OpenPack component if logged in, otherwise pitchpage */}
      {Auth.loggedIn() ? <OpenPack /> : <>
        <div className="splash-container">
          <div className='splash-image'>
            <img src='./imgSplash.png' alt='Choose Your Pack!' />
            <h2>All your favorites, just a PokePack away!</h2>
          </div>
        </div>
      </>}
    </>
  );
};

export default Home;