// importing from express
import express from 'express';

// importing order controllers
import { OrderControllers } from './order.controller';

// declaring router
const router = express.Router();

// route to create an order in the Database
router.post('/', OrderControllers.createOrder);

// route to get an order from the database
router.get('/', OrderControllers.getOrder);

// exporting routes
export const OrderRoutes = router;