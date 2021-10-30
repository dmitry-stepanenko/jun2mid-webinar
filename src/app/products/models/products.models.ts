export interface Product {
    name: string;
    id: number;
    description: string;
    inventory_no: string;
    price: number;
    category_id: number;
}

export type ProductWithCategory = Product & {category: string};

export interface InventoryTypeItem {
    id: number;
    displayed_name: string;
}
