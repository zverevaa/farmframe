import { TOwnedItem, TOwnedRelic, TSelectedItem } from "../lib/types";
import { create } from "zustand";
import { TItem } from "../lib/types";
import { ITEM_CATEGORIES, ITEM_TYPES } from "../lib/constants";

type Store = {
    items: TItem[];
    selectedItems: TSelectedItem[];
    primeItems: TItem[];
    isLoading: boolean;
    errorMessage: string;
    viewType: "grid" | "horizontal";
    ownedParts: TOwnedItem[];
    ownedRelics: TOwnedRelic[];
    getData: () => Promise<void>;
    selectItem: (item: TItem) => void;
    handleSearch: (searchTerm: string | null) => TItem[];
    setViewType: (type: "grid" | "horizontal") => void;
    filterData: (type: string[], filteredData: TItem[]) => TItem[];
    addOwnedPart: (part: TOwnedItem) => void;
    addOwnedRelic: (relic: TOwnedRelic, amount: number) => void;
};

export const useItemsStore = create<Store>((set, get) => ({
    items: [],
    primeItems: [],
    selectedItems: [],
    isLoading: true,
    errorMessage: "",
    viewType: "grid",
    ownedParts: [],
    ownedRelics: [],
    getData: async () => {
        try {
            const response = await fetch(
                `https://api.warframestat.us/items/search/prime/?by=name&only=category,components,imageName,name,type,vaulted&language=en`
            );
            if (!response.ok) {
                throw new Error();
            }
            const data = await response.json();
            const filteredData = await data.filter(
                (item: TItem) =>
                    ITEM_CATEGORIES.includes(item.category) &&
                    ITEM_TYPES.some((subArray) => subArray.includes(item.type))
            );
            set(() => ({
                items: data,
                primeItems: filteredData,
                isLoading: false,
            }));
        } catch {
            set(() => ({ errorMessage: "Something went wrong." }));
        }
    },
    selectItem: (item: TItem) => {
        const state = get();
        const newItem: TSelectedItem = {
            name: item.name,
            type: item.type,
            imageName: item.imageName,
            category: item.category,
            components: item.components,
            vaulted: item.vaulted,
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
            return newData;
        }
        return state.primeItems;
    },
    setViewType: (type: "grid" | "horizontal") => {
        if (type === "grid") {
            set(() => ({ viewType: "grid" }));
        } else {
            set(() => ({ viewType: "horizontal" }));
        }
    },
    filterData: (type: string[], filteredData: TItem[]) => {
        return filteredData.filter(
            (item) => type.includes(item.type) && item.components
        );
    },
    addOwnedPart: (part: TOwnedItem) => {
        const state = get();
        const newPart: TOwnedItem = {
            name: part.name,
            parts: part.parts,
        };
        const index = state.ownedParts.findIndex(
            (obj) => obj.name === part.name
        );
        if (index !== -1) {
            set((state) => ({
                ownedParts: [...state.ownedParts],
            }));
        } else {
            set((state) => ({
                ownedParts: [...state.ownedParts, newPart],
            }));
        }
        set((state) => ({ ownedParts: [...state.ownedParts, newPart] }));
    },
    addOwnedRelic: (relic: TOwnedRelic, amount: number) => {
        const state = get();
        const newRelic: TOwnedRelic = {
            location: relic.location,
            amount: amount,
        };
        const index = state.ownedRelics.findIndex(
            (obj) => obj.location === relic.location
        );
        if (index !== -1 && relic.amount === 0) {
            set((state) => ({
                ownedRelics: [...state.ownedRelics].filter(
                    (item) => item.location !== relic.location
                ),
            }));
        } else if (index === -1) {
            set((state) => ({
                ownedRelics: [...state.ownedRelics, newRelic],
            }));
        } else {
            set((state) => ({
                ownedRelics: [
                    ...state.ownedRelics.map((relic) =>
                        relic.location === newRelic.location
                            ? { ...relic, amount: amount }
                            : relic
                    ),
                ],
            }));
        }
        console.log(state.ownedRelics);
    },
}));
