// importing from mongoose
import { Model } from "mongoose";

// type declaration for variants
export type TVariants = {
    type : string;
    value : string;
}

// type declaration for inventory
export type TInventory = {
    quantity : string;
    inStock : boolean;
}

// type declaration for product
export type TProduct = {
    name : string;
    description : string;
    price : number;
    category : string;
    tags : string[];
    variants : TVariants[];
    inventory : TInventory;
}

// custom static method for product
export interface ProductModel extends Model<TProduct> {
    isProductExists(id : string): Promise<TProduct | null>
}