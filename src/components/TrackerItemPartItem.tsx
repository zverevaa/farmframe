import TrackerCounter from "./TrackerCounter";

export default function TrackerItemPartItem({ name }) {
    return (
        <div className="tracker-item-part__item">
            <div className="tracker-item-part__name">{name}</div>
            <TrackerCounter />
        </div>
    );
}
