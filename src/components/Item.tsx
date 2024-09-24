import { TItem } from "../lib/types";
import { useState } from "react";
type TItemProps = {
    itemData: TItem;
    onClick: () => void;
};

export default function Item({ itemData, onClick }: TItemProps) {
    const { name, imageName } = itemData;
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            onClick={() => {
                onClick();
                setIsSelected((prev) => !prev);
            }}
            className={`item ${isSelected ? "item--selected" : ""}`}
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
