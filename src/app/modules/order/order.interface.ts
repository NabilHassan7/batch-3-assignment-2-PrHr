// importing for mongoose
import { Model } from "mongoose"

// type declaration for order
export type TOrder = {
    email : string,
    productId : string,
    price : number,
    quantity : number
}

// custom static method for product
export interface OrderModel extends Model<TOrder>{
    isOrderExists(id : string): Promise<TOrder | null>;
}