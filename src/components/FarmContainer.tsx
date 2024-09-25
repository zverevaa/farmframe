import { ITEM_TYPES, SECTION_TITLES } from "../lib/constants";
import { useItemsStore } from "../stores/store";
import ItemsSection from "./ItemsSection";

export default function FarmContainer() {
    const selectedItems = useItemsStore((state) => state.selectedItems);
    const filterData = useItemsStore((state) => state.filterData);
    const isLoading = useItemsStore((state) => state.isLoading);

    console.log(filterData(["Warframe"], selectedItems));
    console.log(isLoading);

    return (
        <div className="container">
            <div className="container__body">
                {ITEM_TYPES.map((type, i) => {
                    return (
                        <ItemsSection
                            title={SECTION_TITLES[i]}
                            data={filterData(type, selectedItems) || []}
                            isLoading={isLoading}
                        />
                    );
                })}
            </div>
        </div>
    );
}
