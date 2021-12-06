import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function SideBar() {

    const[sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar)

    return(
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="nav-content">
            
                <div className="menu-bars">
                    <FaIcons.FaBars onClick={showSideBar}/>
                </div>
                <div className="Image">
                    <img src="images/bgbk.png" alt="" />
                </div>
            
            </div>

            <nav className={sideBar?`nav-menu-active`:`nav-menu`}>
                <ul className="side-list">

                    <li className="side-item">
                        <Link to="/" >
                            Página inicial
                        </Link>
                    </li>

                    <li className="side-item">
                        <Link to="/cadastro-produtos">
                            Novos produtos
                        </Link>
                    </li>

                    <li className="side-item">
                        <Link to="/novas-contas">
                            Novas contas
                        </Link>
                    </li>
                    
                    <li className="side-item">
                        <Link to="/pedidos" >
                            Novos pedidos
                        </Link>
                    </li>
                    
                    <li className="side-item">
                        <Link to="/visualizar-contas">
                            Lista de Contas
                        </Link>
                    </li>

                    <li className="side-item">
                        <Link to="/visualizar-pedidos">
                            Lista de Pedidos
                        </Link>
                    </li>
                    
                    <li className="side-item">
                        <Link to="/clientes">
                            Clientes
                        </Link>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
        
    )
}

export default SideBar;