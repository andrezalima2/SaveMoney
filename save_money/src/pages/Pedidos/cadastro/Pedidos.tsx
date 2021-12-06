import React, { FormEvent, useEffect, useState } from "react";
import api from "../../../services/api";
import "./Pedidos.css"

interface Produto{
    [x: string]: any;
    id_prod: any,
    nome_prod: any,
}

function Pedidos(){

    const [id_produto, setIdProduto] = useState('');
    const [id_cliente, setIdCliente] = useState('');
    const [qtd_produto, setQuantidade] = useState('');
    const [data_entrega, setDataEntrega] = useState('');
    const [valor_total, setValorTotal] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const dados = {id_produto: id_produto, id_cliente: id_cliente, qtd_produto: qtd_produto, data_entrega: data_entrega, valor_total: valor_total};
    
        await api.post('/api/orders', dados).then(res => {
            if(res){
                alert("Pedido efetuado!")
                window.location.reload()
            }else{
                alert("Pedido não efetuado")
            }
        });
    }

    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        api.get(`/api/products`).then(response => {
            setProdutos(response.data.products)
        });
    });

    if(!produtos){
        return <p>Carregando...</p>;
    }

    return(
        <form className="form-style-Order" id="orderForm" onSubmit={handleSubmit}>
            <ul>
                <h3>Cadastro de Pedidos</h3>
                <li>
                    <label htmlFor="categories">Selecione o produto:</label>
                    <select name="categories" id="categories" form="orderForm" value={id_produto} onChange={event => setIdProduto(event.target.value)}>
                        {produtos.map((produto: any) => {
                            return(
                                <option value={produto.id_prod}>{produto.nome_prod}</option>
                            )
                        })}
                    </select>
                </li>
                <li>
                    <label htmlFor="cpf">CPF do cliente</label>
                    <input type="text" name="cpf" id="cpf" value={id_cliente} onChange={event => setIdCliente(event.target.value)}/>
                    <span>Insira o CPF do cliente</span>
                </li>
                <li>
                    <label htmlFor="quantity">Quantidade do pedido</label>
                    <input type="text" name="quantity" value={qtd_produto} onChange={event => setQuantidade(event.target.value)}/>
                    <span>Insira o número de produtos</span>
                </li>
                <li>
                    <label htmlFor="deliverDate">Data de entrega</label>
                    <input type="text" name="deliverDate" value={data_entrega} onChange={event => setDataEntrega(event.target.value)}/>
                    <span>Insira a data de entrega</span>
                </li>
                <li>
                    <label htmlFor="totalprice">Preço final</label>
                    <input type="text" name="totalprice" value={valor_total} onChange={event => setValorTotal(event.target.value)}/>
                    <span>Insira o preço final total do pedido</span>
                </li>
                <li>
                    <input type="submit" value="Confirmar pedido" />
                </li>
            </ul>
            
        </form>
    )
}

export default Pedidos;