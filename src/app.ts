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

// application product routes end point
app.use('/api/products', ProductRoutes);

// application order routes end point
app.use('/api/orders', OrderRoutes);

// home route
app.get('/', (req: Request, res: Response) => {
  res.send('API Server for Assignment-2 by NabilHassan7')
})

// catch all middleware
app.use((req : Request, res : Response) => {
  res.status(404).json({
    success : false,
    message : "Route not found"
  })
})

export default app
