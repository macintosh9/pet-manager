export interface Pet {
    id: number;
    category: PetCategory;
    name: string;
    photoUrls: string[];
    tags: Tag[];
    status: string;
}

export interface PetCategory {
    id: number;
    name: string;
}

export interface Tag {
    id: number;
    name: string;
}
