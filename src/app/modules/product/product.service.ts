// importing product typing from interface
import { TProduct } from "./product.interface";

// importing from product model
import { Product } from "./product.model";

// create product service
const createProductIntoDB = async (productData : TProduct) => {
    // checking if product already exists
    if(await Product.isProductExists(productData.name)){
        throw new Error('Product already exists');
    }

    const result = await Product.create(productData);

    return result;
}

// exporting services
export const ProductServices = {
    createProductIntoDB,
}