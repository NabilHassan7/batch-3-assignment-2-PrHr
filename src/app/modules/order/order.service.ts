import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderInDB = async (orderData : TOrder) => {
    if(await Order.isOrderExists(orderData.productId)){
        const result = await Order.create(orderData);

        return result;
    }

    throw new Error('Product does not exist');
}