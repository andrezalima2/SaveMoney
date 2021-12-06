import React, { FormEvent, useState } from "react";
import api from "../../../services/api";
import "./Contas.css"

function Contas(){

    const [id_categoria, setIdCategoria] = useState('');
    const [nome_despesa, setNomeDesp] = useState('');
    const [descricao_despesa, setDescricaoDesp] = useState('');
    const [custo_despesa, setCustoDesp] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const dados = {id_categoria: id_categoria, nome_despesa: nome_despesa, descricao_despesa: descricao_despesa, custo_despesa: custo_despesa};
    
        await api.post('/api/costs', dados).then(res => {
            if(res){
                alert("Cadastro de despesa efetuado!")
                window.location.reload()
            }else{
                alert("Cadastro não efetuado")
            }
        });
    }

    return(
        <>
            <form className="form-style-Debts" id="productForm" onSubmit={handleSubmit}>
                <ul>
                    <h3>Cadastro de Despesas</h3>
                    <li>
                        <label htmlFor="name">Nome da despesa</label>
                        <input type="text" name="name" value={nome_despesa} onChange={event => setNomeDesp(event.target.value)}/>
                        <span>Insira o nome desta despesa</span>
                    </li>
                    <li>
                        <label htmlFor="description">Descrição</label>
                        <input type="text" name="description" value={descricao_despesa} onChange={event => setDescricaoDesp(event.target.value)}/>
                        <span>Descreva os detalhes da despesa</span>
                    </li>
                    <li>
                        <label htmlFor="cost">Custo especifico</label>
                        <input type="text" name="cost" value={custo_despesa} onChange={event => setCustoDesp(event.target.value)}/>
                        <span>Valor referente à esta despesa</span>
                    </li>
                    <li>
                        <label htmlFor="categories">Selecione a categoria:</label>
                        <select name="categories" id="categories" form="productForm" value={id_categoria} onChange={event => setIdCategoria(event.target.value)}>
                            <option value="1">Contas Mensais (ex: água, luz)</option>
                            <option value="2">Compras e ingredientes</option>
                            <option value="3">Serviços de entrega</option>
                            <option value="4">Outras despesas</option>
                        </select>
                    </li>
                    <li>
                        <input type="submit" value="Confirmar registro" />
                    </li>
                </ul>

            </form>

            
        </>
    )
}

export default Contas;