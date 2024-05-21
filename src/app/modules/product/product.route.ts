// importing from express
import express from 'express';

// importing from product controller
import { ProductControllers } from './product.controller';

// declaring router
const router = express.Router();

// route to create a product in the Database
router.post('/create-product', ProductControllers.createProduct);

// exporting routes
export const ProductRoutes = router;