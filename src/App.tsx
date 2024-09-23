import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
    const [selectedItems, setSelectedItems] = useState([]);
    console.log(selectedItems);
    const handleSelect = (item) => {
        const newItem = {
            name: item.name,
            imageName: item.imageName,
            components: [...item.components],
        };
        const foundObject = selectedItems.find((obj) => obj.name === item.name);

        if (foundObject) {
            setSelectedItems((prev) =>
                [...prev].filter((selItem) => item.name !== selItem.name)
            );
        } else {
            setSelectedItems((prev) => [...prev, newItem]);
        }
    };
    console.log(selectedItems);

    return (
        <>
            <Header />
            <Container
                selectedItems={selectedItems}
                setSelectedItems={handleSelect}
            />
        </>
    );
}

export default App;
