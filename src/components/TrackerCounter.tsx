import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";

export default function TrackerCounter({ number, setNumber }) {
    return (
        <div className="tracker-counter">
            <TriangleLeftIcon width={36} height={36} />
            0
            <TriangleRightIcon width={36} height={36} />
        </div>
    );
}
