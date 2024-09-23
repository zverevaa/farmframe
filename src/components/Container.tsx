import { useEffect, useState } from "react";
import ItemsSection from "./ItemsSection";
import ItemsView from "./ItemsView";
import Search from "./Search";
import {
    ITEM_CATEGORIES,
    ITEM_TYPES,
    SECTION_TITLES,
} from "../lib/constants.js";

enum itemCategories {
    warframes = "Warframes",
    primary = "Primary weapons",
}

// get full data, separate it into diff const
// put filter stuff inside useEffect so it only runs 1 time

export default function Container({ selectedItems, setSelectedItems }) {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            const newData = [...data].filter((item) =>
                item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            // console.log(newData);
            return newData;
        }
        return data;
    };

    const filteredData = handleSearch(searchTerm);
    // console.log(filteredData);

    const filterData = (type) => {
        return filteredData.filter(
            (item) =>
                item.name.includes("Prime") &&
                type.includes(item.type) &&
                item.components
        );
    };

    // const test = data.map((item) => item.type);
    // console.log(test);

    useEffect(() => {
        fetch("https://api.warframestat.us/items/")
            .then((res) => res.json())
            .then((data) => {
                const changedData = data.filter((item) =>
                    ITEM_CATEGORIES.includes(item.category)
                );
                const redactedData = changedData.map((item) =>
                    Object.assign(item, { isSelected: false })
                );
                console.log(redactedData);
                setData(redactedData);
            });
    }, []);

    // console.log(filteredData);
    // console.log(searchTerm);
    return (
        <div className="container">
            <div className="container__header">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ItemsView />
            </div>
            <div className="container__body">
                {ITEM_TYPES.map((type, i) => {
                    return (
                        <ItemsSection
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            title={SECTION_TITLES[i]}
                            itemsType={itemCategories.warframes}
                            data={filterData(type)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
