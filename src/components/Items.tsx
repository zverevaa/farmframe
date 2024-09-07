import Item from "./Item";

export default function Items({ itemsType, data }) {
    return (
        <div className="items">
            {data.map((item) => (
                <Item itemData={item} />
            ))}
        </div>
    );
}
