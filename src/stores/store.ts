import { TSelectedItem } from "../lib/types";
import { create } from "zustand";
import { TItem } from "../lib/types";
import { ITEM_CATEGORIES, ITEM_TYPES } from "../lib/constants";

type Store = {
    items: TItem[];
    selectedItems: TSelectedItem[];
    primeItems: TItem[];
    isLoading: boolean;
    errorMessage: string;
    getData: () => Promise<void>;
    selectItem: (item: TItem) => void;
    handleSearch: (searchTerm: string | null) => TItem[];
};

export const useItemsStore = create<Store>((set, get) => ({
    items: [],
    primeItems: [],
    selectedItems: [],
    isLoading: false,
    errorMessage: "",
    getData: async () => {
        console.log("Loading");
        set(() => ({ isLoading: true }));
        const getData = async () => {
            try {
                const response = await fetch(
                    "https://api.warframestat.us/items/"
                );
                if (!response.ok) {
                    throw new Error();
                }
                const data = await response.json();
                const filteredData = await data.filter(
                    (item: TItem) =>
                        ITEM_CATEGORIES.includes(item.category) &&
                        item.name.includes("Prime") &&
                        ITEM_TYPES.some((subArray) =>
                            subArray.includes(item.type)
                        ) &&
                        item.components
                );
                set(() => ({ items: data }));
                set(() => ({ primeItems: filteredData }));
            } catch {
                set(() => ({ errorMessage: "Something went wrong." }));
            }
            set(() => ({ isLoading: false }));
        };
        getData();
    },
    selectItem: (item: TItem) => {
        const state = get();
        const newItem: TSelectedItem = {
            name: item.name,
            type: item.type,
            imageName: item.imageName,
            category: item.category,
            components: item.components,
            amount: 0,
        };
        const index = state.selectedItems.findIndex(
            (obj) => obj.name === item.name
        );
        if (index !== -1) {
            set((state) => ({
                selectedItems: [...state.selectedItems].filter(
                    (item) => item.name !== newItem.name
                ),
            }));
        } else {
            set((state) => ({
                selectedItems: [...state.selectedItems, newItem],
            }));
        }
    },
    handleSearch: (searchTerm) => {
        const state = get();
        if (searchTerm) {
            const newData = [...state.primeItems].filter((item) =>
                item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            console.log("lemme see");
            return newData;
        }
        return state.primeItems;
    },
}));
