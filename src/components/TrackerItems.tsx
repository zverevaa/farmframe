import { TItem } from "../lib/types";
import TrackerItem from "./TrackerItem";

type TTrackerItemsProps = {
    data: TItem[];
};

export default function TrackerItems({ data }: TTrackerItemsProps) {
    return (
        <div className="tracker__items">
            {data.map((item: TItem) => (
                <TrackerItem itemData={item} />
            ))}
        </div>
    );
}
