import { useEffect, useState } from "react";
import ItemsSection from "./ItemsSection";
import ItemsView from "./ItemsView";
import Search from "./Search";

// get full data, separate it into diff const
// put filter stuff inside useEffect so it only runs 1 time

export default function Container() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchTerm) => {
        const filteredData = data.filter(
            (item) =>
                item.name.includes("Prime") && item.category === "Warframes"
        );
        if (searchTerm) {
            const newData = [...filteredData].filter((item) =>
                item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            console.log(newData);
            return newData;
        }

        return filteredData;
    };

    const filteredData = handleSearch(searchTerm);

    useEffect(() => {
        fetch("https://api.warframestat.us/warframes/").then((res) =>
            res.json().then((data) => {
                setData(data);
                console.log(data);
            })
        );
    }, []);

    // console.log(filteredData);
    console.log(searchTerm);
    return (
        <div className="container">
            <div className="container__header">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ItemsView />
            </div>
            <ItemsSection data={filteredData} />
        </div>
    );
}
