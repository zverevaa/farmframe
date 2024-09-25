import { ITEM_TYPES, SECTION_TITLES } from "../lib/constants";
import ItemsSection from "./ItemsSection";

export default function FarmContainer() {
    return (
        <div className="container">
            <div className="container__body">
                {/* {ITEM_TYPES.map((type, i) => {
                    return (
                        <ItemsSection
                            title={SECTION_TITLES[i]}
                            data={filterData(type)}
                        />
                    );
                })} */}
            </div>
        </div>
    );
}
