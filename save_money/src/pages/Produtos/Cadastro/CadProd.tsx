import React, { FormEvent, useState } from "react";
import api from "../../../services/api";
import "./CadProd.css"

function CadProd(){

    return(
        <form className="form-style-Product" id="productForm">
            <ul>
                <h3>Cadastro de Produtos</h3>
                <li>
                    <label htmlFor="name">Nome do Produto</label>
                    <input type="text" name="name" />
                    <span>Insira o nome do produto</span>
                </li>
                <li>
                    <label htmlFor="cost">Custo de produção</label>
                    <input type="text" name="cost" />
                    <span>Insira o custo de produção</span>
                </li>
                <li>
                    <label htmlFor="sellingprice">Preço de venda</label>
                    <input type="text" name="sellingprice" />
                    <span>Insira o preço de venda do produto</span>
                </li>
                <li>
                    <label htmlFor="ingredients">Ingredientes</label>
                    <textarea name="ingredients" />
                    <span>Insira os ingredientes do produto</span>
                </li>
                <li>
                    <label htmlFor="categories">Selecione a categoria:</label>
                    <select name="categories" id="categories" form="productForm">
                        <option value="1">Bolo Simples</option>
                        <option value="2">Bolo Especial</option>
                        <option value="3">Bolo no pote</option>
                        <option value="4">Sobremesa</option>
                        <option value="5">Cupcake</option>
                        <option value="6">Docinho</option>
                    </select>
                </li>
                <li>
                    <input type="submit" value="Confirmar cadastro" />
                </li>
            </ul>
            
        </form>
    )
}

export default CadProd;