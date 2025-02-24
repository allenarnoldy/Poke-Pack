import Login from "../components/Login";
import OpenPack from "../components/OpenPack";

const Home = () => {
    //TODO change loggedIn to a useState
    const loggedIn = false;
    return (
        <>
        {/* Show the OpenPack component if logged in, otherwise login */}
        {loggedIn?<OpenPack/>:<Login/>}
        </>
    );
};

export default Home;