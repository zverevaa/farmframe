export type TItem = {
    name: string;
    category: string;
    type: string;
    imageName: string;
    vaulted: boolean;
    components: TPart[];
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
