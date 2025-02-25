import Auth from '../utils/auth';
import OpenPack from "../components/OpenPack";

const Home = () => {
  return (
    <>
      {/* Show the OpenPack component if logged in, otherwise the landing page */}
      {Auth.loggedIn() ? (
        <div className="home-logged-in">
          <h1>Welcome Back, Collector!</h1>
          <OpenPack />
        </div>
      ) : (
        <div className="splash-container">
          <div className="splash-content">
            <h2>All your favorites, just a PokéPack away!</h2>
            <img src='./imgSplash.png' alt='Choose Your Pack!' className="splash-image" />
            <p>Sign up now and start your card collection today!!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
