import { Router } from 'express';
import productController from '../features/controller/productController';

const routes = Router();

routes.get("/api/products", productController.selectAll)
routes.post("/api/product", productController.insertProducts)

export default routes;