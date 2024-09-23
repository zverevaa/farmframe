import { useState } from "react";

export default function Item({ itemData, setSelectedItems, onClick }) {
    const { name, imageName, isSelected } = itemData;

    const handleClick = () => {
        itemData.isSelected = !isSelected;
        onClick();
    };
    return (
        <div
            onClick={handleClick}
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
