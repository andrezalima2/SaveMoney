import React, { FormEvent, useState } from "react";
import api from "../../../services/api";
import "./CadProd.css"

function CadProd(){

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [sellingprice, setSellingprice] = useState('');
    const [categories, setCategories] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const dados = {name: name, sellingprice: sellingprice, cost: cost, categories: categories};
    
        await api.post('/api/products', dados).then(res => {
            if(res){
                alert("Cadastro efetuado!")
                window.location.reload()
            }else{
                alert("Cadastro não efetuado")
            }
        });
    }

    return(
        <form className="form-style-Product" id="productForm" onSubmit={handleSubmit}>
            <ul>
                <h3>Cadastro de Produtos</h3>
                <li>
                    <label htmlFor="name">Nome do Produto</label>
                    <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
                    <span>Insira o nome do produto</span>
                </li>
                <li>
                    <label htmlFor="cost">Custo de produção</label>
                    <input type="text" name="cost" value={cost} onChange={event => setCost(event.target.value)}/>
                    <span>Insira o custo de produção</span>
                </li>
                <li>
                    <label htmlFor="sellingprice">Preço de venda</label>
                    <input type="text" name="sellingprice" value={sellingprice} onChange={event => setSellingprice(event.target.value)}/>
                    <span>Insira o preço de venda do produto</span>
                </li>
                <li>
                    <label htmlFor="categories">Selecione a categoria:</label>
                    <select name="categories" id="categories" form="productForm" value={categories} onChange={event => setCategories(event.target.value)}>
                        <option value="1">Bolo Simples</option>
                        <option value="2">Bolo Especial</option>
                        <option value="3">Bolo no pote</option>
                        <option value="6">Sobremesa</option>
                        <option value="4">Cupcake</option>
                        <option value="5">Docinhos</option>
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