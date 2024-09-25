import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useItemsStore } from "./stores/store";
import { useEffect } from "react";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";

function App() {
    const fetchData = useItemsStore((state) => state.getData);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="tracker" element={<Tracker />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
