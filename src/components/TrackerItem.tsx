import Item from "./Item";
import { TItem } from "../lib/types";

type TTrackerItemProps = {
    itemData: TItem;
};

export default function TrackerItem({ itemData }: TTrackerItemProps) {
    return (
        <div>
            <div className="tracker__item-info">
                <Item itemData={itemData} />
                <div className="tracker__prices"></div>
            </div>
            <div className="tracker__parts-info">
                {itemData.components.map((comp) => comp.name)}
            </div>
        </div>
    );
}
