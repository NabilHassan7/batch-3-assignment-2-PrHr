// importing from Zod
import { z } from 'zod';

// Zod validation schema order
export const OrderValidationSchema = z.object({
    email: z.string().min(1).max(255).email({ message: 'Invalid email format.' }),
    productId: z.string().min(1).max(255),
    price: z.number().positive(),
    quantity: z.number().int().positive()
});

// Exporting the Order Validation Schema
export default OrderValidationSchema;