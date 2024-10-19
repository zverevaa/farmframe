export type TItem = {
    name: string;
    category: string;
    type: string;
    imageName: string;
    vaulted: boolean;
    components: TPart[];
    amount?: number;
};

export type TPart = {
    name: string;
    drops: TDrop[];
};

export type TDrop = {
    location: string;
};

export type TSelectedItem = TItem & {
    amount: number;
};

export type TOwnedItem = {
    name: string;
    parts: TOwnedPart[];
};

export type TOwnedPart = {
    name: string;
    amount: number;
};

export type TOwnedRelic = {
    location: string;
    amount: number;
};
