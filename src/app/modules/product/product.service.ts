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

// get all product service
const getAllProductsFromDB = async () => {
    const result = await Product.find();

    return result;
}

// get a single product service
const getSingleProductFromDB = async (id : string) => {
    const result = await Product.findOne({_id : id });

    return result;
}

// update a single product service
const updateSingleProductInDB = async (id : string, productData : TProduct) => {

    if(await Product.isProductExists(productData.name)){
         
        const updatingProduct = await Product.replaceOne({_id: id}, productData)

        const result = await Product.findOne({_id : id });

        return result;
    }
    else{
        throw new Error('Product not found');
    }    
}

// exporting services
export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateSingleProductInDB,
}