import { useEffect, useState } from "react";
import TrackerCounter from "./TrackerCounter";
import { useItemsStore } from "../stores/store";

export default function TrackerItemPartItem({ name, part }) {
    const [amount, setAmount] = useState(0);
    const ownedRelics = useItemsStore((state) => state.ownedRelics);
    const addOwnedRelic = useItemsStore((state) => state.addOwnedRelic);
    // console.log(part);
    useEffect(() => {
        if (!amount) return;
        const partNames = ["Blueprint", "Chassis", "Neuroptics", "Systems"];
        if (partNames.includes(name)) {
            console.log("huh");
        } else {
            if (!ownedRelics.includes(name)) {
                addOwnedRelic(part, amount);
            }
        }
    }, [name, amount, part]);
    return (
        <div className="tracker-item-part__item">
            <div className="tracker-item-part__name">{name}</div>
            <TrackerCounter number={amount} setNumber={setAmount} />
        </div>
    );
}
