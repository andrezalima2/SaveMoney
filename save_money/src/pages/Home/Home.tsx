import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home(){

    return(
        <div>

            <div className="divOverflow-categorias">
                <div className="content-list-categoria">

                    <ul className="ul-categoria1">
                        <li className="li-categoria">
                            <div className="card-categoria">
                                <div className="img-categoria">
                                    <img src="/images/boloFuba.jpg" alt=""/>
                                </div>
                                <div className="description-categoria">
                                    <div className="names-categoria">
                                        <p>Bolos</p>
                                        <p>Bolo simples</p>
                                    </div>
                                    <div className="divBtnVisu">
                                        <Link to="/visu-produtos">
                                            <button className="btnVisu">Visualizar</button>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                        </li>
                        <li className="li-categoria">
                            <div className="card-categoria">
                                <div className="img-categoria">
                                    <img src="/images/boloEspecial.jpg" alt=""/>
                                </div>
                                <div className="description-categoria">
                                    <div className="names-categoria">
                                        <p>Bolos</p>
                                        <p>Bolo especial</p>
                                    </div>
                                    <div className="divBtnVisu">
                                        <Link to="/visu-produtos">
                                            <button className="btnVisu">Visualizar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="li-categoria">
                            <div className="card-categoria">
                                <div className="img-categoria">
                                    <img src="/images/boloPote.jpg" alt=""/>
                                </div>
                                <div className="description-categoria">
                                    <div className="names-categoria">
                                        <p>Bolos</p>
                                        <p>Bolo no pote</p>
                                    </div>
                                    <div className="divBtnVisu">
                                        <Link to="/visu-produtos">
                                            <button className="btnVisu">Visualizar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>


                    <ul className="ul-categoria2">
                        <li className="li-categoria">
                            <div className="card-categoria">
                                <div className="img-categoria">
                                    <img src="/images/cupcakes.png" alt=""/>
                                </div>
                                <div className="description-categoria">
                                    <div className="names-categoria">
                                        <p>Cupcakes</p>
                                        <p>Cupcakes variados</p>
                                    </div>
                                    <div className="divBtnVisu">
                                        <Link to="/visu-produtos">
                                            <button className="btnVisu">Visualizar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="li-categoria">
                            <div className="card-categoria">
                                <div className="img-categoria">
                                    <img src="/images/sobremesas.png" alt=""/>
                                </div>
                                <div className="description-categoria">
                                    <div className="names-categoria">
                                        <p>Sobremesas</p>
                                        <p>Sobremesas diversas</p>
                                    </div>
                                    <div className="divBtnVisu">
                                        <Link to="/visu-produtos">
                                            <button className="btnVisu">Visualizar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="li-categoria">
                            <div className="card-categoria">
                                <div className="img-categoria">
                                    <img src="/images/docinhos.png" alt=""/>
                                </div>
                                <div className="description-categoria">
                                    <div className="names-categoria">
                                        <p>Docinhos</p>
                                        <p>Docinhos de festa</p>
                                    </div>
                                    <div className="divBtnVisu">
                                        <Link to="/visu-produtos">
                                            <button className="btnVisu">Visualizar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Home;