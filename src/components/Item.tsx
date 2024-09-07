export default function Item({ itemData }) {
    const { name, imageName } = itemData;
    return (
        <div className="item">
            <div className="item__container">
                <img
                    className="item__img"
                    src={`https://cdn.warframestat.us/img/${imageName}`}
                    alt=""
                />
                <div className="item__name">
                    {name.split(" ")[0].toUpperCase()}
                </div>
            </div>
        </div>
    );
}
