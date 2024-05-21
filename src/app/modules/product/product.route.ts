// importing from express
import express from 'express';

// importing from product controller
import { ProductControllers } from './product.controller';

// declaring router
const router = express.Router();

// route to create a product in the Database
router.post('/create-product', ProductControllers.createProduct);

// route to retrieve a list of all products
router.get('/',ProductControllers.getAllProducts);

// route to retrieve a single product
router.get('/:productId',ProductControllers.getSingleProduct);

// route to retrieve a single product
router.put('/:productId',ProductControllers.updateSingleProduct);

// delete a single product
router.delete('/:productId',ProductControllers.deleteSingleProduct);

// exporting routes
export const ProductRoutes = router;