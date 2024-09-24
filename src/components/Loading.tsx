export default function Loading() {
    return (
        <div className="items">
            {[...new Array(6).keys()].map(() => (
                <div className="item item--loading"></div>
            ))}
        </div>
    );
}
