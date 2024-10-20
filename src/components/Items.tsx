import { TItem } from "../lib/types";
import { useItemsStore } from "../stores/store";
import Item from "./Item";

type TItemsProps = {
    data: TItem[];
};

export default function Items({ data }: TItemsProps) {
    const setSelectedItems = useItemsStore((state) => state.selectItem);
    const selectedItems = useItemsStore((state) => state.selectedItems);
    const toggleSelected = (item: TItem) => {
        setSelectedItems(item);
    };
    return (
        <div className="items">
            {data.map((item: TItem) => (
                <Item
                    itemData={item}
                    onClick={() => toggleSelected(item)}
                    isSelected={selectedItems.some(
                        (obj) => obj.name === item.name
                    )}
                />
            ))}
        </div>
    );
}
