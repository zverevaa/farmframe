import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";

export default function TrackerCounter({ number, setNumber }) {
    return (
        <div className="tracker-counter">
            <TriangleLeftIcon
                onClick={() => setNumber((number) => --number)}
                width={36}
                height={36}
            />
            {number}
            <TriangleRightIcon
                onClick={() => setNumber((number) => ++number)}
                width={36}
                height={36}
            />
        </div>
    );
}
