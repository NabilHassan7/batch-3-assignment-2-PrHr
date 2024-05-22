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

// get all order service
const getAllOrdersFromDB = async () => {
    const result = await Order.find();

    return result;
}

// search for specific order
const getSingleOrderByEmailFromDB = async (userEmail : any) => {
    console.log(userEmail);

    const result = await Order.find({email : userEmail});

    const objectLength : number = Object.keys(Object(result)).length;

    if(objectLength > 0){
        return result;
    }
    else{
        throw new Error('Order not found');
    }
}

export const OrderServices = {
    createOrderInDB,
    getAllOrdersFromDB,
    getSingleOrderByEmailFromDB
}