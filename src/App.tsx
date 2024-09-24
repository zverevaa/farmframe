import { useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import { useItemsStore } from "./stores/store";

function App() {
    const fetchData = useItemsStore((state) => state.getData);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <Header />
            <Container />
        </>
    );
}

export default App;
