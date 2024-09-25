import { TItem } from "../lib/types";
import { useItemsStore } from "../stores/store";
type TItemProps = {
    itemData: TItem;
    onClick: () => void;
    isSelected: boolean;
};

export default function Item({ itemData, onClick, isSelected }: TItemProps) {
    const { name, imageName, vaulted } = itemData;
    const viewType = useItemsStore((state) => state.viewType);
    // console.log("rerender");
    return (
        <>
            {viewType === "grid" && (
                <div
                    onClick={onClick}
                    className={`item item--rendered ${
                        isSelected ? "item--selected" : ""
                    } ${vaulted ? "item--vaulted" : ""}`}
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
            )}
            {viewType === "horizontal" && (
                <div
                    onClick={onClick}
                    className={`item item--bar item--rendered ${
                        isSelected ? "item--selected" : ""
                    } ${vaulted ? "item--vaulted" : ""}`}
                >
                    <div className="item__container item__container--bar">
                        <div className="item__name item__name--bar">
                            {name.split(" ")[0].toUpperCase()}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
