import { Router } from "express";
import { productController } from "../controllers/products.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
export const router = Router()

router.get('/', productController.getAll);
router.get('/s', productController.getByName);
router.post('/',verifyAccessToken, productController.createOne);
router.delete("/:id", verifyAccessToken, productController.deleteOne);
router.patch("/:id", verifyAccessToken,  productController.updateOne);

