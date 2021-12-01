import { Request, Response } from 'express';
const categoriesModel = require('../model/categoriesModel')

export default{

    async selectAllCatCost(request: Request, response: Response){

        const categories = await categoriesModel.selectAllCatCost()

        if(categories){
            response.json({
                categories: categories
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async selectAllCatProd(request: Request, response: Response){

        const categories = await categoriesModel.selectAllCatProd()
        console.log(categories)

        if(categories){
            response.json({
                categories: categories
            })
        }else{
            console.log("erro ao procurar")
        }
    }
}