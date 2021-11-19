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
                    <img srcSet="./images/logo.png" alt=""/>
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
                        <Link to="/pedidos" >
                            Pedidos
                        </Link>
                    </li>
                    
                    <li className="side-item">
                        <Link to="/contas-pagar">
                            Contas a pagar
                        </Link>
                    </li>
                    
                    <li className="side-item">
                        <Link to="/contas-receber">
                            Contas a receber
                        </Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </IconContext.Provider>
        
    )
}

export default SideBar;