import { Router } from 'express'
import {validateProduct} from '../validators'
import {validateId} from '../validators'
import {
  getProducts,
  getProduct,
  deleteProduct,
  postProduct,
  updateProduct,
} from "../controllers/product";

const router = Router();


router.get("/", getProducts);
router.get("/:id", validateId, getProduct);
router.delete("/:id",validateId, deleteProduct);
router.post("/",validateProduct, postProduct);
router.put("/:id",validateId, updateProduct);

export default router;