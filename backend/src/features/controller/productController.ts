import { Request, Response } from 'express';
const productModel = require('../model/productModel')

export default{

    async selectAllProducts(request: Request, response: Response){

        const products = await productModel.selectAllProducts()

        if(products){
            response.json({
                products: products
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async selectTargetProducts(request: Request, response: Response){

        const{
            id_prod
        } = request.params;

        const products = await productModel.selectTargetProducts(id_prod);

        if(products){
            response.json({
                products: products
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async insertProducts(request: Request, response: Response){

        const{
            name,
            cost,
            sellingprice,
            categories
        } = request.body;

        console.log(request.body)

        const categoria = parseInt(categories)

        const products = await productModel.insertProducts(categoria, name, cost, sellingprice);
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
    },
    
    async updateProducts(request: Request, response: Response){

        const{
            id_categoria,
            nome_prod,
            custo,
            preco_venda
        } = request.body;

        const{
            id_prod
        } = request.params;

        const products = await productModel.updateProducts(id_categoria, nome_prod, custo, preco_venda, id_prod)
        if (products){
            response.json({
                status: "200",
                message: "produto atualizado"
            })
        } else{
            response.json({
                status: "500",
                message: "produto não atualizado"
            })
        }
    },

    async deleteProducts(request: Request, response: Response){

        const{
            id_prod
        } = request.params;

        const id_produto = parseInt(id_prod)

        const products = await productModel.deleteProducts(id_produto)
        if (products){
            response.json({
                status: "200",
                message: "produto deletado"
            })
        } else{
            response.json({
                status: "500",
                message: "erro ao deletar"
            })
        }
    },
    
    async selectProdPerCategorie(request: Request, response: Response){
        const{
            id_cat
        } = request.params

        const id_categoria = parseInt(id_cat)

        const products = await productModel.selectProdPerCategorie(id_categoria)
        console.log(products)
        if (products){
            response.json({
                status: "200",
                message: "produtos encontrados",
                produtos: products
            })
        } else{
            response.json({
                status: "500",
                message: "erro ao listar"
            })
        }
    }
}