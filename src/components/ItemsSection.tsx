import { TriangleDownIcon } from "@radix-ui/react-icons";
import Items from "./Items";

enum itemTypes {
    warframes = "Warframes",
}

export default function ItemsSection({ data }) {
    return (
        <section className="items-section">
            <div className="items-section__container">
                <h2 className="items-section__title">
                    {itemTypes.warframes.toUpperCase()}
                </h2>
                <TriangleDownIcon
                    className="items-section__icon"
                    width={"32"}
                    height={"32"}
                />
            </div>
            <Items itemsType={itemTypes.warframes} data={data} />
        </section>
    );
}
