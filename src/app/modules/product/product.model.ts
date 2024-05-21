// importing from mongoose
import { Schema, model } from 'mongoose';

// importing type declarations from interface
import { ProductModel, TInventory, TProduct, TVariants } from './product.interface';

// Variant Schema Declaration
const variantsSchema = new Schema<TVariants>({
    type: {
        type: String,
        required: [true,'Type is required.'],
    },
    value: {
        type: String,
        required: [true,'Value is required.'],
    }
})

// Inventory Schema Declaration
const inventorySchema = new Schema<TInventory>({
    quantity: {
        type: String,
        required: [true,'Quantity is required.'],
    },
    inStock: {
        type: Boolean,
        required: [true,'inStock is required.'],
        default: true
    }
})

// Product Schema Declaration
const productSchema = new Schema<TProduct, ProductModel>({
    name: {
        type: String,
        required: [true,'Name is required.'],
        unique: true
    },
    description: {
        type: String,
        required: [true,'Description is required.'],
    },
    price: {
        type: Number,
        required: [true,'Price is required.'],
    },
    category: {
        type: String,
        required: [true,'Price is required.'],
    },
    tags: {
        type: [String],
        required: [true,'Tags are required.'],
        default: []
    },
    variants: {
        type: [variantsSchema],
        required: [true,'Variants are required.'],
    },
    inventory: {
        type: inventorySchema,
        required: [true,'Inventory is required.'],
    }
})

// static method
productSchema.statics.isProductExists = async function(name : string){
    const existingProduct = await Product.findOne({name});

    return existingProduct;
}

// exporting product model
export const Product = model<TProduct, ProductModel>('Product',productSchema);
