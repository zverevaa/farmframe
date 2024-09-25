import { TriangleDownIcon } from "@radix-ui/react-icons";

type ItemsSectionHeaderProps = {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
    title: string;
};

export default function ItemsSectionHeader({
    isOpened,
    setIsOpened,
    title,
}: ItemsSectionHeaderProps) {
    return (
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
    );
}
