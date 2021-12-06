import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import './VisuContas.css'

interface Conta{
    [x: string]: any;
    id_despesa: any,
    id_categoria: any,
    nome_despesa: any,
    descricao_despesa: any,
    custo_despesa: any
}

function VisuContas(){

    const [contas, setConta] = useState<Conta>();

    useEffect(() => {
        api.get(`/api/costs`).then(response => {
            console.log(response.data)
            setConta(response.data.costs);
        });
    });

    async function deleteCosts(id_despesa: any){

        await api.delete(`/api/cost/${id_despesa}`).then(response => {
            alert(response.data.message);
            window.location.reload()
        });
    }

    if(!contas){
        return <p>Carregando...</p>;
    }

    return(
        <div className="form-style-Dashboard">
                <ul>
                    <h3>Listagem de Despesas</h3>
                    {contas.map((conta: any) => {
                        return(
                            <li>
                                <div className="label-content-cost">
                                    <label> <strong>Nome: </strong>{conta.nome_despesa}</label>
                                    <label> <strong>Descrição: </strong>{conta.descricao_despesa}</label>
                                    <label> <strong>Custo: </strong>R${conta.custo_despesa}</label>
                                </div>
                                <div className="btn-cost">
                                    <Link to="" className="link-btn-cost">
                                        <button onClick={() => deleteCosts(conta.id_despesa)}>
                                            Deletar
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default VisuContas;