// importing from express
import { Request, Response } from "express";

// importing from product services
import { ProductServices } from "./product.service";

// create product controller
const createProduct = async (req : Request, res : Response) => {
    try{
        const { product : productData } = req.body;

        const result = await ProductServices.createProductIntoDB(productData);

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

// exporting product controllers
export const ProductControllers = {
    createProduct,
}