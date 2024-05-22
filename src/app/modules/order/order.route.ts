// importing from express
import express from 'express';

// importing order controllers
import { OrderControllers } from './order.controller';

// declaring router
const router = express.Router();

// route to create an order in the Database
router.post('/', OrderControllers.createOrder);

// exporting routes
export const OrderRoutes = router;