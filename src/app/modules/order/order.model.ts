// importing from mongoose
import { Schema, model } from 'mongoose';

// importing type declarations from interface
import { OrderModel, TOrder } from './order.interface';

// importing the product model
import { Product } from '../product/product.model';

const orderSchema = new Schema<TOrder, OrderModel>({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    productId: {
        type: String,
        required: [true, 'Product ID is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    }
})

// static method
orderSchema.statics.isProductExists = async function(id : string){
    const existingOrder = await Product.findOne({_id : id});

    return existingOrder;
}

// exporting order model
export const Order = model<TOrder, OrderModel>('Order',orderSchema);