import { Router } from 'express';
import productController from '../features/controller/productController';
import clientController from '../features/controller/clientController';
import costsController from '../features/controller/costsController';
import orderController from '../features/controller/orderController';
import categoriesController from '../features/controller/categoriesController';

const routes = Router();

routes.get("/api/products", productController.selectAllProducts)
routes.get("/api/product:id_prod", productController.selectTargetProducts)
routes.get("/api/products/categorie/:id_cat", productController.selectProdPerCategorie)
routes.post("/api/products", productController.insertProducts)
routes.put("/api/product/:id_prod", productController.updateProducts)
routes.delete("/api/product/:id_prod", productController.deleteProducts)

routes.get("/api/clients", clientController.selectAllClients)
routes.get("/api/client:id_cpf", clientController.selectTargetClient)
routes.post("/api/clients", clientController.insertClients)
routes.put("/api/client:id_cpf", clientController.updateClients)

routes.get("/api/costs", costsController.selectAllCosts)
routes.get("/api/cost:id_despesa", costsController.selectTargetCosts)
routes.post("/api/costs", costsController.insertCosts)
routes.put("/api/cost:id_despesa", costsController.updateCosts)
routes.delete("/api/cost/:id_despesa", costsController.deleteCosts)

routes.get("/api/orders", orderController.selectAllOrders)
routes.get("/api/order:id_pedido", orderController.selectTargetOrder)
routes.post("/api/orders", orderController.insertOrders)
routes.put("/api/order:id_pedido", orderController.updateOrders)
routes.delete("/api/order/:id_pedido", orderController.deleteOrders)

routes.get("/api/categoriescost", categoriesController.selectAllCatCost)
routes.get("/api/categoriesprod", categoriesController.selectAllCatProd)

export default routes;