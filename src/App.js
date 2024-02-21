import NavBar from "./components/nav-bar/NavBar";
import PreNav from "./components/pre-nav/PreNav";
import Home from "./components/home/Home";
import Book from "./components/book/Book";
import Rates from "./components/rates/Rates";

function App() {
    return (
        <>
            <PreNav/>
            <NavBar/>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Navigate to="/home"/>}/>*/}
            {/*        <Route path="/home" element={<Home/>}/>*/}
            {/*        <Route path="/book" element={<Book/>}/>*/}
            {/*        <Route path="/rates" element={<Rates/>}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            <Home/>
            <Book/>
            <Rates/>
        </>
    )
}

export default App;
