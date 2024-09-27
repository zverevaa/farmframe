import { TriangleDownIcon } from "@radix-ui/react-icons";
import Items from "./Items";
import { useState } from "react";
import { TItem } from "../lib/types";
import Loading from "./Loading";
import TrackerItems from "./TrackerItems";
type TItemSectionProps = {
    data: TItem[];
    title: string;
    isLoading: boolean;
    sectionType: "items" | "tracker";
};

export default function ItemsSection({
    data,
    title,
    isLoading,
    sectionType,
}: TItemSectionProps) {
    const [isOpened, setIsOpened] = useState(true);
    return (
        <section
            className={`items-section ${
                sectionType === "tracker" ? "tracker" : ""
            }`}
        >
            <div className="items-section__container">
                <h2 className="items-section__title">{title.toUpperCase()}</h2>
                <TriangleDownIcon
                    onClick={() => setIsOpened(!isOpened)}
                    className={`items-section__icon ${
                        isOpened ? null : "items-section__icon--flipped"
                    }`}
                    width={"32"}
                    height={"32"}
                />
            </div>
            {isOpened && isLoading && <Loading />}
            {isOpened && !isLoading && sectionType === "items" && (
                <Items data={data} />
            )}
            {isOpened && !isLoading && sectionType === "tracker" && (
                <TrackerItems data={data} />
            )}
        </section>
    );
}
