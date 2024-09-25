import Container from "./components/Container";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container />} />
                </Routes>
                <Container />
            </BrowserRouter>
        </>
    );
}

export default App;
