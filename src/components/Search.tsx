import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Search({ searchTerm, setSearchTerm }) {
    return (
        <form className="search-form">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-form__input"
                type="text"
                placeholder="SEARCH..."
            />
            <button className="search-form__button button">
                <MagnifyingGlassIcon />
            </button>
        </form>
    );
}
