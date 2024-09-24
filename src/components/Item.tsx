import { TItem } from "../lib/types";
type TItemProps = {
    itemData: TItem;
    onClick: () => void;
    isSelected: boolean;
};

export default function Item({ itemData, onClick, isSelected }: TItemProps) {
    const { name, imageName } = itemData;
    return (
        <div
            onClick={onClick}
            className={`item item--rendered ${
                isSelected ? "item--selected" : ""
            }`}
        >
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
