import Auth from "../utils/auth";
import OpenPack from "../components/OpenPack";
import DisplayBooster from "../components/DisplayBooster";

const Home = () => {
  return (
    <>
      {/* Show the OpenPack component if logged in, otherwise the landing page */}
      {Auth.loggedIn() ? (
        <div>
          <h1 className="home-logged-in">Welcome Back, Collector!</h1>
          <OpenPack />
        </div>
      ) : (
        <div className="splash-container">
          <div className="splash-content">
            <h2>All your favorites, just a PokéPack away!</h2>
            <p>Sign up now and start your card collection today!!</p>
            <img
              src="./imgSplash.png"
              alt="Poke Cards"
              className="splash-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
