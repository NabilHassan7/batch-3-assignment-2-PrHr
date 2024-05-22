// importing from zod
import { z } from 'zod';

// Zod schema for variants
export const VariantSchema = z.object({
    type: z.string().min(1).trim().max(255),
    value: z.string().min(1).trim().max(255)
});

// Zod schema for inventory
export const InventorySchema = z.object({
    quantity: z.number().int().positive(),
    inStock: z.boolean().default(true)
});

// Zod schema for product
export const ProductValidationSchema = z.object({
    name: z.string().min(1).trim().max(255),
    description: z.string().min(1).trim(),
    price: z.number().positive(),
    category: z.string().min(1).trim().max(255),
    tags: z.array(z.string().min(1)),
    variants: z.array(VariantSchema),
    inventory: InventorySchema
});

// Exporting the Product Validation Schema
export default ProductValidationSchema;