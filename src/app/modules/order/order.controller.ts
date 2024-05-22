// importing from express
import { Request, Response } from "express";

// importing from order services
import { OrderServices } from "./order.service";

// order product controller
const createOrder = async (req : Request, res : Response) => {
    try{
        const { order : orderData } = req.body;

        const result = await OrderServices.createOrderInDB(orderData);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
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

const getOrder = async (req : Request, res : Response) => {
    try{
        const { email } = req.query;

        if(email){
            const result = await OrderServices.getSingleOrderByEmailFromDB(email);

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result
            })
        }
        else{
            const result = await OrderServices.getAllOrdersFromDB();

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
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

// exporting order controllers
export const OrderControllers = {
    createOrder,
    getOrder
}