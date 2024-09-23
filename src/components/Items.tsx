import Item from "./Item";

export default function Items({ data, selectedItems, setSelectedItems }) {
    return (
        <div className="items">
            {data.map((item) => (
                <Item
                    itemData={item}
                    setSelectedItems={setSelectedItems}
                    onClick={() => setSelectedItems(item)}
                />
            ))}
        </div>
    );
}
