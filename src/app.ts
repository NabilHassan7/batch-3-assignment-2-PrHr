// importing from express
import express, { Application, Request, Response } from 'express';

// importing cors
import cors from 'cors';

// importing product routes
import { ProductRoutes } from './app/modules/product/product.route';

// importing order routes
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

// parsers
app.use(express.json());

// cors
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);

// application routes
app.use('/api/orders', OrderRoutes);

// home route
app.get('/', (req: Request, res: Response) => {
  res.send('API Server for Assignment-2 by NabilHassan7')
})

export default app
