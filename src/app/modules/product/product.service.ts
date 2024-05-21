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

    const objectLength : number = Object.keys(Object(result)).length;

    if(objectLength > 0){
        return result;
    }
    else{
        throw new Error('Product not found');
    } 
}

// update a single product service
const updateSingleProductInDB = async (id : string, productData : TProduct) => {
    
    const productToUpdate = await Product.findOne({_id : id });

    const objectLength : number = Object.keys(Object(productToUpdate)).length;

    if(objectLength > 0){
        // const updatingProduct = await Product.replaceOne({_id: id}, productData)

        Product.replaceOne({_id: id}, productData);

        const result = await Product.findOne({_id : id });

        return result;
    }
    else{
        throw new Error('Product not found');
    }
}

// delete a single product service
const deleteSingleProductFromDB = async (id : string) => {
    const productToDelete = await Product.findOne({_id : id });

    const objectLength : number = Object.keys(Object(productToDelete)).length;

    if(objectLength > 0){   
        const result = await Product.deleteOne({_id : id});

        return result;
    }
    else{
        throw new Error('Product not found');
    }
}

// searching for a specific term service
const searchForSpecificTermInDB = async (searchTerm : any) => {
    const result = Product.find({
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } }
        ]
    })

    return result;
}

// exporting services
export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateSingleProductInDB,
    deleteSingleProductFromDB,
    searchForSpecificTermInDB
}