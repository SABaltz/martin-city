import PreNav from "./components/pre-nav/PreNav";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import Reservations from "./components/reservations/Reservations";
import Rules from "./components/rules/Rules";
import Attractions from "./components/attractions/Attractions";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Terms from "./components/terms/Terms";
import {useEffect, useState} from "react";
import TermsPopup from "./components/cookies/TermsPopup";
import Home from "./components/home/Home";

function App() {
    const [openTerms, setOpenTerms] = useState(false);

    useEffect(() => {
        const termsAccepted = localStorage.getItem('termsAccepted');
        if (!termsAccepted) {
            setOpenTerms(true);
        }
    }, []);

    const handleCloseTerms = () => {
        localStorage.setItem('termsAccepted', 'true');
        setOpenTerms(false);
    };
    return (
        <>
            <BrowserRouter>
                <PreNav/>
                <Routes>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/" element={
                        <>
                            <Home/>
                            <Description/>
                            <Reservations/>
                            {/*<Amenities/>*/}
                            <Rules/>
                            <Attractions/>
                            <TermsPopup open={openTerms} handleClose={handleCloseTerms}/>

                        </>
                    }/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
