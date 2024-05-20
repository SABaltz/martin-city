import PreNav from "./components/pre-nav/PreNav";
import Home from "./components/home/Home";
import Description from "./components/description/Description";
import Amenities from "./components/amenities/Amenities";
import Footer from "./components/footer/Footer";
import Reservations from "./components/reservations/Reservations";

function App() {
    return (
        <>
            <PreNav/>
            <Home/>
            <Description/>
            <Reservations/>
            <Amenities/>
            <Footer/>
        </>
    )
}

export default App;
