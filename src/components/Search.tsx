import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useItemsStore } from "../stores/store";

type TSearchProps = {
    searchTerm: string;
    setSearchTerm: (searchText: string) => void;
};

export default function Search({ searchTerm, setSearchTerm }: TSearchProps) {
    const onSearch = useItemsStore((state) => state.handleSearch);

    const handleSearch = (searchText: string) => {
        onSearch(searchText);
        setSearchTerm(searchText);
    };
    return (
        <form className="search-form">
            <input
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-form__input"
                type="text"
                placeholder="SEARCH..."
            />
            <button className="search-form__button button">
                <MagnifyingGlassIcon width={"32"} height={"32"} />
            </button>
        </form>
    );
}
