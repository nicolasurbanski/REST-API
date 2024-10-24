import Product from '../models/product.js'

export const productController = {
    async getAll(req, res){
        try{
            const products = await Product.find()
            products.length ?
            res.status(200).json({success: true, message: "Product Collection", data: products})
            :
            res.status(404).json({success: false, message: "Product Database is empty"})
        } catch(error){
            res.status(500).json({success: false, message: "Internal Server Error"})      
        }
    },

    async createOne(req, res){
        const {name, price, brand} = req.body;
        try{
            const newProduct = new Product({
                name,
                price,
                brand,
            });
            const savedProduct = await newProduct.save();
            res.status(200).json({success: true, message:"New product created", data: savedProduct});
        } catch(error){
            console.log("Error creating new product:", error);
            res.status(500).json({success: false, message: "Internal Server Error", error: error.message});
        }
    },

    async getByName(req, res){
        const {name} = req.query;  
        if(!name){
          return res.status(400).json({success : false, message: "Missing name query param" })
        } try{
          const products = await Product.find({name : {$regex: name, $options: "i"}})
          if(!products.length){
              return res.status(404).json({success : false, message : "No products found"})
          }
          res.status(200).json({
              success : true,
              message: "Products by query name",
              data : products
          })
        } catch(error){
          return res.status(500).json({success : false, message: "Internal Server Error" })
        }
      },

      async updateOne(req, res){
        try{
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if(!updatedProduct){
               return res.status(404).json({success: false, message: "Update failed. Product not found"})  
            }
            res.status(200).json({success : true, message: "Product updated", data : updatedProduct})
        } catch(error){
            res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });    
        }
    },

    async deleteOne(req, res){
        try{
            const product = await Product.findByIdAndDelete(req.params.id)
            if(!product){
                res.status(404).json({success: false, message: "Deletion Failed. Product Not Found"})
            }
                res.status(200).json({ success: true, message: "Deletion completed"});

            }  catch(error){
                res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
            }
        },
}