// importing from product model
import { Product } from "../product/product.model";

// importing order typing from interface
import { TOrder } from "./order.interface";

// importing from order model
import { Order } from "./order.model";

// create order service
const createOrderInDB = async (orderData : TOrder) => {
    const ordererdProduct = await Product.findOne({ _id : orderData.productId });
    
    const objectLength : number = Object.keys(Object(ordererdProduct)).length;

    // checking if ordered product exists in database
    if(objectLength > 0){
        const result = await Order.create(orderData);

        return result;
    }

    throw new Error('Product does not exist');
}

export const OrderServices = {
    createOrderInDB,
}