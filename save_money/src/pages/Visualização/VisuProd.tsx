import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./VisuProd.css"

interface Produto{
    [x: string]: any;
    custo: any,
    id_categoria: any
    id_prod: any,
    nome_prod: any,
    preco_venda: any
}


function VisuProd(){

    const { id_categoria } = useParams() as { 
        id_categoria: string;
    }
    const [produtos, setProduto] = useState<Produto>();

    useEffect(() => {
        api.get(`/api/products/categorie/${id_categoria}`).then(response => {
          setProduto(response.data.produtos);
        });
    }, [id_categoria]);

    async function deleteProd(id_prod: any){

        await api.delete(`/api/product/${id_prod}`).then(response => {
            alert(response.data.message);
            window.location.reload()
        });
    }
    
    
    if(!produtos){
        return <p>Carregando...</p>;
    }

    
    
    return(
        <div className="form-style-List">
                <ul>
                    <h3>Listagem de Produtos</h3>
                    {produtos.map((produto: any) => {
                        return(
                            <li>
                                <div className="label-content-prod">
                                    <label> <strong>Produto: </strong>{produto.nome_prod}</label>
                                    <label> <strong>Custo: </strong>{produto.custo}</label>
                                    <label> <strong>Preço de venda: </strong>{produto.preco_venda}</label>
                                </div>
                                <div className="btn-prod">
                                    <Link to="" className="link-btn-prod">
                                        <button onClick={() => deleteProd(produto.id_prod)}>
                                            Deletar
                                        </button>
                                    </Link>
                                    <Link to="" className="link-btn-prod">
                                        <button>
                                            Editar
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

export default VisuProd;