import Item from "./Item";

export default function Items({ data }) {
    return (
        <div className="items">
            {data.map((item) => (
                <Item itemData={item} />
            ))}
        </div>
    );
}
