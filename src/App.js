import PreNav from "./components/pre-nav/PreNav";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import Reservations from "./components/reservations/Reservations";
import Rules from "./components/rules/Rules";
import Attractions from "./components/attractions/Attractions";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Terms from "./components/terms/Terms";

function App() {
    return (
        <>
            <BrowserRouter>
                <PreNav/>
                <Routes>
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/" element={
                        <>
                            <Description/>
                            <Reservations/>
                            {/*<Amenities/>*/}
                            <Rules/>
                            <Attractions/>
                        </>
                    } />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
