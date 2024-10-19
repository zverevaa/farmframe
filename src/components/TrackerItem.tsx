import Item from "./Item";
import { TItem } from "../lib/types";
import TrackerItemPart from "./TrackerItemPart";

type TTrackerItemProps = {
    itemData: TItem;
};

export default function TrackerItem({ itemData }: TTrackerItemProps) {
    console.log(itemData);
    return (
        <div className="tracker__item">
            <div className="tracker__item-info">
                <Item itemData={itemData} />
                <div className="tracker__prices"></div>
            </div>
            <div className="tracker__parts-info">
                {itemData.components.map(
                    (comp) =>
                        comp.name !== "Orokin Cell" && (
                            <TrackerItemPart parts={comp} />
                        )
                )}
            </div>
        </div>
    );
}
