import { ViewGridIcon, ViewHorizontalIcon } from "@radix-ui/react-icons";
import { useItemsStore } from "../stores/store";

export default function ItemsView() {
    const setViewType = useItemsStore((state) => state.setViewType);
    return (
        <div className="view-selection">
            <div
                onClick={() => setViewType("grid")}
                className={"view-selection__item"}
            >
                <ViewGridIcon width={60} height={60} />
            </div>
            <div
                onClick={() => setViewType("horizontal")}
                className={"view-selection__item"}
            >
                <ViewHorizontalIcon width={60} height={60} />
            </div>
        </div>
    );
}
