export interface Product {
    name: string;
    id: number;
    description: string;
    inventory_no: string;
    price: number;
    category_id: number;
}

export interface InventoryTypeItem {
    id: number;
    displayed_name: string;
}
