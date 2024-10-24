import { timeStamp } from "console";
import mongoose from "mongoose";
const Schema = mongoose.Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: [0, "Price must be atleast 0.1"],
    },

    brand: {
        type: String,
        required: true
    },
})

ProductSchema.index({ name: "text"})

const Product = mongoose.model("product", ProductSchema)
export default Product;