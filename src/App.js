import PreNav from "./components/pre-nav/PreNav";
import Home from "./components/home/Home";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import Reservations from "./components/reservations/Reservations";
import Rules from "./components/rules/Rules";
import Attractions from "./components/attractions/Attractions";


function App() {
    return (
        <>
            <PreNav/>
            <Home/>
            <Description/>
            <Reservations/>
            {/*<Amenities/>*/}
            <Rules/>
            <Attractions/>
            <Footer/>
        </>
    )
}

export default App;
