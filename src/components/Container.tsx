import { useEffect, useState } from "react";
import ItemsSection from "./ItemsSection";
import ItemsView from "./ItemsView";
import Search from "./Search";
import { ITEM_TYPES, SECTION_TITLES } from "../lib/constants.ts";
import { useItemsStore } from "../stores/store.js";

export default function Container() {
    const fetchData = useItemsStore((state) => state.getData);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = useItemsStore((state) => state.handleSearch);
    const filteredData = handleSearch(searchTerm);
    const primeItems = useItemsStore((state) => state.primeItems);

    const filterData = (type: string[]) => {
        if (!filteredData) return primeItems;
        return filteredData.filter(
            (item) => type.includes(item.type) && item.components
        );
    };
    console.log(filteredData);

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
                            title={SECTION_TITLES[i]}
                            data={filterData(type)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
