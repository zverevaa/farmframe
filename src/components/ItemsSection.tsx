import { TriangleDownIcon } from "@radix-ui/react-icons";
import Items from "./Items";
import { useState } from "react";

export default function ItemsSection({ data, title }) {
    const [isOpened, setIsOpened] = useState(true);
    console.log(data);

    return (
        <section className="items-section">
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
            {isOpened && <Items data={data} />}
        </section>
    );
}
