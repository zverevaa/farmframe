import { TPart } from "../lib/types";
import TrackerItemPartItem from "./TrackerItemPartItem";

type TTrackerItemPart = {
    parts: TPart;
};

export default function TrackerItemPart({ parts }: TTrackerItemPart) {
    console.log(parts.drops);
    return (
        <div className="tracker-item__part">
            <TrackerItemPartItem name={parts.name} />
            <div className="tracker-item__relics">
                {parts.drops.map((part) => {
                    const relic = part.location;
                    const relicRefinement = [
                        "Radiant",
                        "Flawless",
                        "Exceptional",
                    ];
                    if (
                        !relicRefinement.some((refinement) =>
                            relic.includes(refinement)
                        )
                    ) {
                        return (
                            <TrackerItemPartItem
                                name={part.location.replace(
                                    /\s([^ ]+).*$/,
                                    " $1"
                                )}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}
