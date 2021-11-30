import { Request, Response } from 'express';
const productModel = require('../model/productModel')

export default{

    async selectAll(request: Request, response: Response){

        const products = await productModel.selectAllProducts()

        if(products){
            response.json({
                products: products
            })
        }else{
            console.log("deu ruim")
        }
    },

    async insertProducts(request: Request, response: Response){

        const{
            id_categoria,
            nome_prod,
            custo,
            preco_venda
        } = request.body;

        const products = await productModel.insertProducts(id_categoria, nome_prod, custo, preco_venda);
        if (products){
            response.json({
                status: "200",
                message: "produto cadastrado"
            })
        } else{
            response.json({
                status: "500",
                message: "produto não cadastrado"
            })
        }
    }
}