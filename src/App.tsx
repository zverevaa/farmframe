import Container from "./components/Container";
import FarmContainer from "./components/FarmContainer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="farm" element={<FarmContainer />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
