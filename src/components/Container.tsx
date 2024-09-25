import { useState } from "react";
import ItemsSection from "./ItemsSection";
import ItemsView from "./ItemsView";
import Search from "./Search";
import { ITEM_TYPES, SECTION_TITLES } from "../lib/constants.ts";
import { useItemsStore } from "../stores/store.js";

export default function Container() {
    const [searchTerm, setSearchTerm] = useState("");
    const filterData = useItemsStore((state) => state.filterData);
    const handleSearch = useItemsStore((state) => state.handleSearch);
    const filteredData = handleSearch(searchTerm);
    const isLoading = useItemsStore((state) => state.isLoading);

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
                            data={
                                !isLoading ? filterData(type, filteredData) : []
                            }
                            isLoading={isLoading}
                        />
                    );
                })}
            </div>
        </div>
    );
}
