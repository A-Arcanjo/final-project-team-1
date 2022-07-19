import createError from "http-errors";
import Product from "../models/product.js";


export const productPost  = async (req, res, next) => {
    // look for an exisitng product
    let existingProduct;

    try {
        existingProduct = await Product.findOne(req.body);
    } catch {
        return next(createError(500, "Query didn't succeed.Please try again!"))
    }

    // create a new product

    if (!existingProduct) {
        let newProduct;
        
        try {
            newProduct = new Product(req.body);
            await newProduct.save()
        } catch {
            return next(createError(500, "Product could not be created. Please try again!"))
        }

        res.statut(201).json({id: newProduct._id})
    } else {
        res.json({id: existingProduct._id})
    }
} 