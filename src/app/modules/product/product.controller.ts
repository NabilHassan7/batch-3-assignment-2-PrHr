// importing from express
import { Request, Response } from "express";

// importing from product services
import { ProductServices } from "./product.service";

// importing the product validation schema
import ProductValidationSchema from "./product.validation";

// create product controller
const createProduct = async (req : Request, res : Response) => {
    try{
        const { product : productData } = req.body;

        // product data validation using zod
        const parsedProductData = ProductValidationSchema.parse(productData);

        const result = await ProductServices.createProductIntoDB(parsedProductData);

        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    }
    catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err
        })
    }
}

// get all product controller
const getAllProducts = async (req : Request, res : Response) => {
    try{
        const { searchTerm } = req.query;

        if(searchTerm){
            const result = await ProductServices.searchForSpecificTermInDB(searchTerm);

            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result
            })
        }
        else{
            const result = await ProductServices.getAllProductsFromDB();

            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result
            })
        }
    }
    catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err
        })
    }
}

// get single product controller
const getSingleProduct = async (req : Request, res : Response) => {
    try{
        const { productId } = req.params;
        const { searchTerm } = req.query;

        if(searchTerm){
            const result = await ProductServices.searchForSpecificTermInDB(searchTerm);

            res.status(200).json({
                success: true,
                message: "Products matching search term {VALUE} fetched successfully!",
                data: result
            })
        }
        else{
            const result = await ProductServices.getSingleProductFromDB(productId);

            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result
            })
        } 
    }
    catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err
        })
    }
}

// update single product controller
const updateSingleProduct = async (req : Request, res : Response) => {
    try{
        const { productId } = req.params;

        const { product : productData } = req.body;

        const result = await ProductServices.updateSingleProductInDB(productId, productData);

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        })
    }
    catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err
        })
    }
}

// delete a single product controller
const deleteSingleProduct = async (req : Request, res : Response) => {
    try{
        const { productId } = req.params;

        const result = await ProductServices.deleteSingleProductFromDB(productId);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null
        })
    }
    catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err
        })
    }
}

// exporting product controllers
export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}