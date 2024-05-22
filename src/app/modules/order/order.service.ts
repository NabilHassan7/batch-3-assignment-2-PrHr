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
        const isProductInStock = ordererdProduct?.inventory.inStock;
        const currentProductQuantity = ordererdProduct?.inventory.quantity;

        // checking if ordered product is in stock
        if(isProductInStock == true && currentProductQuantity != 0){
            const productQuantity = ordererdProduct?.inventory.quantity || 0;
            const orderedQuantity = orderData.quantity;
            
            // checking if enough quantity is present to fulfill order
            if(orderedQuantity > productQuantity){
                throw new Error('Insufficient quantity available in inventory');
            }
            else{
                // updating the current quantity
                await Product.updateOne(
                    {_id : ordererdProduct?.id},
                    { $inc : 
                        {
                            "inventory.quantity" : -orderedQuantity
                        }
                    }
                )

                const updatedQuantity = ordererdProduct?.inventory.quantity;
                // changing the inStock flag if the quantity is zero
                if(updatedQuantity == 0){
                    await Product.updateOne(
                        {_id : ordererdProduct?.id},
                        { 
                            "inventory.inStock" : false
                        }
                    )
                }

                // creating the order in the database
                const result = await Order.create(orderData);

                return result;
            }
        }
        else{
            throw new Error('Insufficient quantity available in inventory');
        }
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