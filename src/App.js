import PreNav from "./components/pre-nav/PreNav";
import Home from "./components/home/Home";
import Description from "./components/description/Description";
import Reservations from "./components/reservations/Reservations";
import Amenities from "./components/Amenities/Amenities";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <PreNav/>
            <Home/>
            <Description/>
            <Reservations/>
            <Amenities/>
            {/*<Location/>*/}
            <Footer/>
        </>
    )
}

export default App;
